import { NextResponse } from 'next/server'

import {
  listCredentials,
} from '@/common/utilities/credentialStorage';
import { logger } from '@/common/utilities/logger';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';

export async function GET(request: Request) {
  try {
    await sessionMiddleware(request);

    return NextResponse.json(await listCredentials());
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}
