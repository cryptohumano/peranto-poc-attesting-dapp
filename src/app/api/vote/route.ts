import { configuration } from '@/common/utilities/configuration'
import { firestore } from '@/common/utilities/firebase';
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import * as Kilt from '@kiltprotocol/sdk-js'
import { doc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const { candidate } = await request.json()
  const session = await sessionMiddleware(request);
  const { encryptionKeyUri } = session;

  await setDoc(
    doc(firestore, 'votation', encryptionKeyUri),
    {
      candidate
    },
  );

  return NextResponse.json({ success: true })
}
