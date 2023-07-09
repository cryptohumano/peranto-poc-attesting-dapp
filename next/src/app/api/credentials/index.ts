import { NextResponse } from 'next/server'

import {
  listCredentials,
} from '@/common/utilities/credentialStorage';
import { logger } from '@/common/utilities/logger';

export async function GET() {
  try {
    return NextResponse.json(await listCredentials());
  } catch (error) {
    logger.error(error)
  }
}
