import { decryptMessageBody, encryptMessageBody } from '@/common/utilities/encryptMessage';
import { sendErrorResponse } from '@/common/utilities/errorResponse';
import { initKilt } from '@/common/utilities/initKilt';
import { logger } from '@/common/utilities/logger';
import { sessionMiddleware } from '@/common/utilities/sessionStorage';
import { NextResponse } from 'next/server'
import crypto from "crypto"

const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc"

const encrypt = ((text: string) =>
{
   const cipher = crypto.createCipheriv(ALGO, ENC, IV);
   let encrypted = cipher.update(text, 'utf8', 'base64');

   encrypted += cipher.final('base64');

   return encrypted;
});

const decrypt = ((text: string) =>
{
   const decipher = crypto.createDecipheriv(ALGO, ENC, IV);
   const decrypted = decipher.update(text, 'base64', 'utf8');
   return (decrypted + decipher.final('utf8'));
});

export async function POST(request: Request) {
  try {
    await initKilt()

    const { message } = await request.json();

    await sessionMiddleware(request);

    const encryptedMessage = encrypt(message)

    // const output = await encryptMessageBody(encryptionKeyUri, {
    //   content: {
    //     name: did,
    //     message
    //   },
    //   type: 'error',
    // });

    // let decrypted

    // try {
    //   decrypted = await decryptMessageBody(output)
    // } catch {}

    return NextResponse.json({ encryptedMessage })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}


export async function GET(request: Request) {
  try {
    await initKilt()

    const { message } = await request.json();

    await sessionMiddleware(request);

    const decryptedMessage = decrypt(message)

    // const output = await encryptMessageBody(encryptionKeyUri, {
    //   content: {
    //     name: did,
    //     message
    //   },
    //   type: 'error',
    // });

    // let decrypted

    // try {
    //   decrypted = await decryptMessageBody(output)
    // } catch {}

    return NextResponse.json({ decryptedMessage })
  } catch (error) {
    logger.error(error);

    return sendErrorResponse(error)
  }
}
