import { NextResponse } from 'next/server'

import {
  deleteCredential,
  getCredential,
} from '@/common/utilities/credentialStorage';
import { logger } from '@/common/utilities/logger';
import { sendErrorResponse } from '@/common/utilities/errorResponse';

export async function GET(_: Request, { id }: { id: string }) {
  try {
    return NextResponse.json(await getCredential(id as string))
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}

export async function DELETE(_: Request, { id }: { id: string }) {
  try {
    await deleteCredential(id);

    return new NextResponse(undefined, { status: 200 })
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}
