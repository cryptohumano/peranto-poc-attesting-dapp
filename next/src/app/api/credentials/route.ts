import { NextResponse } from 'next/server'

import {
  listCredentials,
} from '@/common/utilities/credentialStorage';
import { logger } from '@/common/utilities/logger';
import { sendErrorResponse } from '@/common/utilities/errorResponse';

export async function GET() {
  try {
    return NextResponse.json(await listCredentials());
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}
