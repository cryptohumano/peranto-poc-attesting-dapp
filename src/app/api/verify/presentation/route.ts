import { getCredential } from '@/common/utilities/credentialStorage'
import * as Kilt from '@kiltprotocol/sdk-js'
import { NextResponse } from 'next/server'
import { randomAsHex } from '@polkadot/util-crypto'
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import { configuration } from '@/common/utilities/configuration'
import { ineCType } from '@/common/cTypes/ineCType'
import { keypairsPromise } from '@/common/utilities/keypairs'
import { connect } from '@kiltprotocol/sdk-js'

// Store somewhere in the backend.
export function generateRequestChallenge() {
  return randomAsHex(24)
}

export async function GET(req: Request) {
  await connect('wss://peregrine.kilt.io')

  // const { credentialId } = await req.json()
  // const credential = await getCredential(credentialId)
  // await verificationFlow(credential, () => {}, )

  const session = await sessionMiddleware(req);
  const { encryptionKeyUri } = session;

  const { did: claimerSessionDidUri } = Kilt.Did.parse(encryptionKeyUri)

  const message = Kilt.Message.fromBody(
    {
      content: {
        cTypes: [
          {
            cTypeHash:
              ineCType.$id.replace("kilt:ctype:", "") as `0x${string}`,
            requiredProperties: ['dateOfBirth', 'fullName', 'ineID']
          }
        ],
        challenge: generateRequestChallenge()
      },
      type: 'request-credential'
    },
    configuration.did,
    claimerSessionDidUri
  )

  const { keyAgreement } = await keypairsPromise;

  const { document: verifierDidDoc } = (await Kilt.Did.resolve(
    configuration.did,
  )) || { document: { keyAgreement: [], uri: null } };

  if (!verifierDidDoc) {
    throw new Error('The verifier DID must exist');
  }

  const verifierEncryptionKey = verifierDidDoc.keyAgreement?.[0];

  if (!verifierEncryptionKey) {
    throw new Error('The verifier DID must have a key agreement key');
  }

  const encryptCallback: Kilt.EncryptCallback = async ({
    data,
    peerPublicKey,
  }) => {
    const { box, nonce } = Kilt.Utils.Crypto.encryptAsymmetric(
      data,
      peerPublicKey,
      keyAgreement.secretKey,
    );

    return {
      data: box,
      nonce,
      keyUri: `${verifierDidDoc.uri}${verifierEncryptionKey.id}`,
    } as any;
  };

  const encryptedMessage = await Kilt.Message.encrypt(
    message,
    encryptCallback,
    session.encryptionKeyUri,
  );

  return NextResponse.json({
    encryptedMessage
  })
}
