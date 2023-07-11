import { NextResponse } from 'next/server'

import {
  getCredential,
  addAttestation,
} from '@/common/utilities/credentialStorage';
import { revoke } from '@/common/utilities/revoke';
import { logger } from '@/common/utilities/logger';
import { sendErrorResponse } from '@/common/utilities/errorResponse';

export async function POST(_: Request, { params: { id } }: { params: { id: string } }) {
  try {
    const { claim } = (await getCredential(id)) as any;

    const attestation = await revoke(claim);

    const attestedCredential = await addAttestation(id, attestation);

    return NextResponse.json(attestedCredential)
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}
