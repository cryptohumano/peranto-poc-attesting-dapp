import { NextResponse } from 'next/server'

import {
  deleteCredential,
  getCredential,
} from '@/common/utilities/credentialStorage';
import { logger } from '@/common/utilities/logger';

export async function GET(_: Request, { id }: { id: string }) {
  try {
    return NextResponse.json(await getCredential(id as string))
  } catch (error) {
    logger.error(error)
  }
}

export async function DELETE(_: Request, { id }: { id: string }) {
  try {
    await deleteCredential(id);

    return new NextResponse(undefined, { status: 200 })
  } catch (error) {
    logger.error(error)
  }
}
