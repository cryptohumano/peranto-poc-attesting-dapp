import { NextResponse } from 'next/server'

import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';

import { firestore } from "@/common/utilities/firebase"
import { logger } from '@/common/utilities/logger'
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { addClaim } from '@/common/utilities/credentialStorage';
import { StatusCodes } from 'http-status-codes';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';

export async function POST(request: Request) {
  // implement your payment logic here

  try {
    logger.debug('Mock processing payment');

    const { credential } = await sessionMiddleware(request);

    if (!credential) {
      throw new Error('Session credential not found');
    }

    addClaim(credential);

    logger.debug('Payment received, sent credential to attester');

    return new NextResponse(null, { status: StatusCodes.NO_CONTENT })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
