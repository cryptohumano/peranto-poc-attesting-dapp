import { configuration } from '@/common/utilities/configuration'
import { firestore } from '@/common/utilities/firebase';
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import * as Kilt from '@kiltprotocol/sdk-js'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const { candidate } = await request.json()
  const session = await sessionMiddleware(request);
  const { did } = session;

  const _doc = await getDoc(doc(firestore, 'votation', did))

  if (_doc.exists()) {
    return NextResponse.json({ success: true })
  }

  await setDoc(
    doc(firestore, 'votation', did),
    {
      candidate
    },
  );

  return NextResponse.json({ success: true })
}
