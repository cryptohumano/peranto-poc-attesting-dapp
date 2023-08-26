import { decryptMessageBody, encryptMessageBody } from '@/common/utilities/encryptMessage';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { initKilt } from '@/common/utilities/initKilt';
import { logger } from '@/common/utilities/logger';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  try {
    await initKilt()

    const session = await sessionMiddleware(request);
    const { encryptionKeyUri } = session;

    const output = await encryptMessageBody(encryptionKeyUri, {
      content: {
        name: 'Msg 1',
        message: 'Message one for demo purposes'
      },
      type: 'error',
    });
    const parsedOutput = JSON.parse(JSON.stringify(output))

    logger.debug(parsedOutput)

    const decrypted = await decryptMessageBody(parsedOutput)
    const parsedDecrypted = JSON.parse(JSON.stringify(decrypted))

    logger.debug(parsedDecrypted)

    return NextResponse.json(parsedDecrypted)
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
