
import { StatusCodes } from 'http-status-codes';

import { Did, DidResourceUri, Utils, connect, ConfigService } from '@kiltprotocol/sdk-js';
import { randomAsHex } from '@polkadot/util-crypto';

import { didDocumentPromise } from '@/common/utilities/didDocument';
import { decrypt } from '@/common/utilities/cryptoCallbacks';
import {
  BasicSession,
  basicSessionMiddleware,
  setSession,
} from '@/common/utilities/sessionStorage';
import { logger } from '@/common/utilities/logger';
import { NextResponse } from 'next/server';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { CheckSessionInput, GetSessionOutput } from '@/common/utilities/sessionApi';
import { configuration } from '@/common/utilities/configuration';

const adminWhitelist = [
  "did:kilt:4qYEfZgassjFcD7WpbnXy8zA9Bupn4EPnpRf1RJSge2KAyF4",
  "did:kilt:4pCaJEa3oesmxtxff6sgiEgrY4ngqnE8FeTPkPesX7PnUzAv"
]

export async function POST(request: Request) {
  let session: BasicSession | undefined

  try {
    session = await basicSessionMiddleware(request)
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: StatusCodes.FORBIDDEN })
  }

  try {
    logger.debug('Session confirmation started');

    const payload = await request.json() as CheckSessionInput;

    const { encryptionKeyUri, encryptedChallenge, nonce, selectedDid } = payload;

    await connect(configuration.blockchainEndpoint);

  const api = ConfigService.get('api')
  const _did = await api.call.did.query(encryptionKeyUri)
  console.log("AAAAADDDD", _did)

    if (selectedDid) {
      await Did.resolve(selectedDid)

      if (!adminWhitelist.includes(selectedDid))
        return new NextResponse('No admin DID', { status: StatusCodes.FORBIDDEN })
    }

    const encryptionKey = await Did.resolveKey(encryptionKeyUri);

    logger.debug('Session confirmation resolved DID encryption key');

    const { keyAgreementKey, did } = await didDocumentPromise;

    const { data } = await decrypt({
      data: Utils.Crypto.coToUInt8(encryptedChallenge),
      nonce: Utils.Crypto.coToUInt8(nonce),
      keyUri: `${did}${keyAgreementKey.id}`,
      peerPublicKey: encryptionKey.publicKey,
    });
    logger.debug('Session confirmation decrypted challenge');

    const decryptedChallenge = Utils.Crypto.u8aToHex(data);
    const originalChallenge = session.didChallenge;

    if (decryptedChallenge !== originalChallenge) {
      return new NextResponse('Challenge signature mismatch', { status: StatusCodes.FORBIDDEN })
    }

    setSession({
      ...session,
      did: encryptionKey.controller,
      encryptionKeyUri,
      didConfirmed: true,
    });

    logger.debug('Challenge confirmation matches');

    return new NextResponse(null, { status: StatusCodes.NO_CONTENT })
  } catch (error) {
    return sendErrorResponse(error)
  }
}

function startSession() {
  const sessionId = randomAsHex(24);
  const challenge = randomAsHex(24);

  setSession({ sessionId, didChallenge: challenge });

  return {
    challenge,
    sessionId,
  };
}

export async function GET() {
  const { did, keyAgreementKey } = await didDocumentPromise;
  const dAppEncryptionKeyUri: DidResourceUri = `${did}${keyAgreementKey.id}`;

  return NextResponse.json({
    dAppEncryptionKeyUri,
    ...startSession(),
  } as GetSessionOutput)
}
