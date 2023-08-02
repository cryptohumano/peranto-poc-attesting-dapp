import { CType, Claim, IClaimContents, IQuote, Quote, connect } from '@kiltprotocol/sdk-js';

import { StatusCodes } from 'http-status-codes';
import { configuration } from '@/common/utilities/configuration';
import { sign } from '@/common/utilities/cryptoCallbacks';
import { encryptMessageBody } from '@/common/utilities/encryptMessage';
import { logger } from '@/common/utilities/logger';
import { Session, sessionMiddleware } from '@/common/utilities/sessionStorage';
import {
  kiltCost,
  SupportedCType,
  supportedCTypes,
} from '@/common/utilities/supportedCTypes';
import { NextResponse } from 'next/server';
import { sendErrorResponse } from '@/common/utilities/errorResponse';

const TTL = 5 * 60 * 60 * 1000;
const TERMS = 'https://example.com/terms-and-conditions';

interface Input {
  type: SupportedCType;
  claimContents: IClaimContents;
}

export async function POST(request: Request) {
  try {
    await connect('wss://peregrine.kilt.io')

    logger.debug('Submit terms started');

    const session = await sessionMiddleware(request);
    const { encryptionKeyUri } = session;

    const { type, claimContents } = await request.json() as Input;

    logger.info('ctype: ' + JSON.stringify(supportedCTypes[type]));
    const a = await CType.fetchFromChain("kilt:ctype:0x6023e692aa21ed94f24e22c061b840ea777eccceb103469617ec7d1e7388a1a5")
    logger.info('ctype: ' + JSON.stringify(a));

    const claim = Claim.fromCTypeAndClaimContents(
      supportedCTypes[type],
      claimContents,
      session.did,
    );
    logger.debug('Generated claim');

    const quote: IQuote = {
      attesterDid: configuration.did,
      cTypeHash: claim.cTypeHash,
      cost: { tax: { VAT: 0 }, net: kiltCost[type], gross: kiltCost[type] },
      currency: 'KILT',
      timeframe: new Date(Date.now() + TTL).toISOString(),
      termsAndConditions: TERMS,
    };

    const signedQuote = await Quote.createAttesterSignedQuote(quote, sign);
    logger.debug('Signed quote');

    const output = await encryptMessageBody(encryptionKeyUri, {
      content: {
        claim,
        legitimations: [],
        quote: signedQuote,
        cTypes: [supportedCTypes[type]],
      },
      type: 'submit-terms',
    });

    logger.debug('Submit terms complete');

    return new NextResponse(JSON.stringify(output))
  } catch (error) {
    return sendErrorResponse(error)
  }
}
