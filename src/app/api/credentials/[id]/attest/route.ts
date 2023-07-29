import { NextResponse } from 'next/server'

import {
  getCredential,
  addAttestation,
} from '@/common/utilities/credentialStorage';
import { attest } from '@/common/utilities/attest';
import { logger } from '@/common/utilities/logger';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { connect } from '@kiltprotocol/sdk-js';


export async function POST(_: Request, { params: { id } }: { params: { id: string } }) {
  try {
    await connect('wss://peregrine.kilt.io')

    const { claim } = (await getCredential(id)) as any;

    const attestation = await attest(claim);

    const attestedCredential = await addAttestation(id, attestation);

    return NextResponse.json(attestedCredential)
  } catch (error) {
    logger.error(error)

    return sendErrorResponse(error)
  }
}
