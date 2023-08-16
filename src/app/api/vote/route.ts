import { configuration } from '@/common/utilities/configuration'
import { firestore } from '@/common/utilities/firebase';
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import { collection, doc, getDoc, getDocs, setDoc, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  const docs = await getDocs(collection(firestore, 'votation'))
  let candidate0 = 0
  let candidate1 = 0

  docs.forEach((_doc) => {
    if (_doc.data().candidate === 0) candidate0++
    else candidate1++
  })

  return NextResponse.json({
    candidate0,
    candidate1
  })
}

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
