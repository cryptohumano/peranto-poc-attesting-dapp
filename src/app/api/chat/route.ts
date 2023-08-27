import { decryptMessageBody, encryptMessageBody } from '@/common/utilities/encryptMessage';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { initKilt } from '@/common/utilities/initKilt';
import { logger } from '@/common/utilities/logger';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
  try {
    await initKilt()

    const { message } = await request.json();

    const session = await sessionMiddleware(request);
    const { encryptionKeyUri, did } = session;

    const output = await encryptMessageBody(encryptionKeyUri, {
      content: {
        name: did,
        message
      },
      type: 'error',
    });

    let decrypted

    try {
      decrypted = await decryptMessageBody(output)
    } catch {}

    return NextResponse.json({ message: `Decrypted::: ${message}` })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
