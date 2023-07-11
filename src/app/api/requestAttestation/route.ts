import { NextResponse } from 'next/server'
import { Credential, CType, Message, Quote } from '@kiltprotocol/sdk-js';

import { logger } from '@/common/utilities/logger'
import { decrypt } from '@/common/utilities/cryptoCallbacks';
import {
  Session,
  sessionMiddleware,
  setSession,
} from '@/common/utilities/sessionStorage';
import { supportedCTypes } from '@/common/utilities/supportedCTypes';
import { StatusCodes } from 'http-status-codes';
import { sendErrorResponse } from '@/common/utilities/errorResponse';

export async function POST(request: Request) {
  try {
    const body = await request.json()
    logger.debug('Handling attestation request');

    const message = await Message.decrypt(body, decrypt);
    const messageBody = message.body;
    logger.debug('Request attestation message decrypted');

    Message.verifyMessageBody(messageBody);
    const { type } = messageBody;

    if (type === 'reject' || type === 'reject-terms') {
      return new NextResponse('Message contains rejection', { status: StatusCodes.CONFLICT })
    }

    if (type !== 'request-attestation') {
      throw new Error('Unexpected message type');
    }

    const { quote, credential } = messageBody.content;

    if (quote) {
      await Quote.verifyQuoteAgreement(quote);

      logger.debug('Quote agreement verified');
    }

    const cTypes = Object.values(supportedCTypes);
    const cTypeId = CType.hashToId(credential.claim.cTypeHash);
    const ctype = cTypes.find(({ $id }) => $id === cTypeId);

    if (!ctype) {
      return new NextResponse('Unsupported CType', { status: StatusCodes.FORBIDDEN })
    }

    logger.debug('CType supported');

    await Credential.verifyWellFormed(credential, { ctype });
    logger.debug('Credential data structure verified');

    const session = sessionMiddleware(request);

    setSession({ ...session, credential });

    logger.debug('Request attestation complete');

    return new NextResponse(null, { status: StatusCodes.NO_CONTENT })
  } catch (error) {
    return sendErrorResponse(error)
  }
}
