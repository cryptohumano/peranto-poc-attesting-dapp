import { NextResponse } from 'next/server'

import axios from 'axios';
import { collection, doc, setDoc } from 'firebase/firestore';

import { firestore } from "@/common/utilities/firebase"
import { logger } from '@/common/utilities/logger'
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { addClaim } from '@/common/utilities/credentialStorage';
import { StatusCodes } from 'http-status-codes';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';
import { encryptMessageBody } from '@/common/utilities/encryptMessage';

export async function POST(request: Request) {
  // implement your payment logic here

  try {
    logger.debug('Mock processing payment');

    const { credential, encryptionKeyUri } = await sessionMiddleware(request);

    if (!credential) {
      throw new Error('Session credential not found');
    }

    const output = await encryptMessageBody(encryptionKeyUri, {
      content: {
        claimHash: credential.rootHash
      },
      type: "request-payment"
    } as any)

    const id = await addClaim(credential);

    logger.debug('Payment received, sent credential to attester');

    await setDoc(doc(collection(firestore, 'mail')), {
      to: "services@peranto.xyz",
      message: {
        subject: 'New Attestation request',
        html: `<div><h2>New attestation request with id: ${id}</h2><br /><p><a href="https://app.peranto.xyz/admin/attestation/credential/${id}">https://app.peranto.xyz/admin/attestation/credential/${id}</a></p></div>`,
      },
    });

    // return new NextResponse(null, { status: StatusCodes.NO_CONTENT })
    return new NextResponse(JSON.stringify(output))
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
