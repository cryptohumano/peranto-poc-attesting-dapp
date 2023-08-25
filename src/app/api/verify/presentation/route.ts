import { getCredential } from '@/common/utilities/credentialStorage'
import * as Kilt from '@kiltprotocol/sdk-js'
import { NextResponse } from 'next/server'
import { randomAsHex } from '@polkadot/util-crypto'
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import { configuration } from '@/common/utilities/configuration'
import { ineCType } from '@/common/cTypes/ineCType'
import { keypairsPromise } from '@/common/utilities/keypairs'
import { connect } from '@kiltprotocol/sdk-js'
import crypto from 'crypto'

// Store somewhere in the backend.
function generateRequestChallenge() {
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
            requiredProperties: ['dateofbirth', 'fullname', 'ineid']
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

export async function POST(req: Request) {
  const { message } = await req.json() as any
  const { keyAgreement } = await keypairsPromise;

  const decryptCallback: Kilt.DecryptCallback = async ({
    data,
    nonce,
    peerPublicKey
  }) => {
    const result = Kilt.Utils.Crypto.decryptAsymmetric(
      { box: data, nonce },
      peerPublicKey,
      keyAgreement.secretKey
    )
    if (!result) {
      throw new Error('Cannot decrypt')
    }
    return {
      data: result
    }
  }

  const decryptedMessage = await Kilt.Message.decrypt(
    message,
    decryptCallback
  )

  if (decryptedMessage.body.type !== 'submit-credential') {
    throw new Error('Unexpected message type')
  }

  const credential = decryptedMessage.body.content[0]

  const { revoked, attester } = await Kilt.Credential.verifyPresentation(
    credential
  )

  if (revoked) {
    throw new Error("Credential has been revoked and hence it's not valid.")
  }

  if (attester === configuration.did) {
    console.log(
      "The claim is valid. Claimer's INE:",
      credential.claim.contents
    )
  }


  const secret = 'thekey-to-jashh';
  const ineId = crypto.createHmac('sha256', credential.claim.contents.ineid + ' ' + secret).digest('hex');

  return NextResponse.json({
    attester,
    ineId,
    credentia: credential.claim.contents,
  })
}
