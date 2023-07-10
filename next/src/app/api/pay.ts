import { NextResponse } from 'next/server'

import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';

import { firestore } from "@/common/utilities/firebase"
import { logger } from '@/common/utilities/logger'
import { sendErrorResponse } from '@/common/utilities/errorResponse';

export async function POST(req: Request) {
  const { accountId, validationId } = await req.json()

  try {
    const { data } = await axios.get(
      `https://api.validations.truora.com/v1/validations/${validationId}`,
      {
        headers: {
          'Truora-API-Key':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiIiwiYWRkaXRpb25hbF9kYXRhIjoie30iLCJjbGllbnRfaWQiOiJUQ0llNTEwMjRiOTlmN2YwZDc2NzZhYTFlOGI1NWY3YmI4MiIsImV4cCI6MzI2NTQ3OTQ2MywiZ3JhbnQiOiIiLCJpYXQiOjE2ODg2Nzk0NjMsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xX1lZY2VRNXlxSSIsImp0aSI6ImVkMzZhMGQwLTYxYjgtNDQ0Ni04OWNmLWFiNDEwYWY5NDkyNCIsImtleV9uYW1lIjoicGVyYW50b3Rlc3QiLCJrZXlfdHlwZSI6ImJhY2tlbmQiLCJ1c2VybmFtZSI6InBlcmFudG9zZXJ2aWNlcy1wZXJhbnRvdGVzdCJ9.gVB8petsqNJAmwSUUF8AKwzx8UUezTpyqrsEIH36ses',
        },
      },
    );

    const docRef = await setDoc(
      doc(firestore, 'truora', 'testId_' + validationId),
      {
        ...data,
        accountId,
        validationId,
      },
    );

    return NextResponse.json({
      docRef,
    })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
