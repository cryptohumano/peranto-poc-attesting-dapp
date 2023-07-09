import { NextResponse } from 'next/server'

import {
  getCredential,
  addAttestation,
} from '@/common/utilities/credentialStorage';
import { revoke } from '@/common/utilities/revoke';
import { logger } from '@/common/utilities/logger';

export async function POST(_: Request, { id }: { id: string }) {
  try {
    const { claim } = (await getCredential(id)) as any;

    const attestation = await revoke(claim);

    const attestedCredential = await addAttestation(id, attestation);

    return NextResponse.json(attestedCredential)
  } catch (error) {
    logger.error(error)
  }
}
