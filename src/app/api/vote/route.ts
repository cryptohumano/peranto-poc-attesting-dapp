import { configuration } from '@/common/utilities/configuration'
import { firestore } from '@/common/utilities/firebase';
import { sessionMiddleware } from '@/common/utilities/sessionStorage'
import { collection, doc, getDoc, getDocs, setDoc, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// function encrypt(text,password){
//   var cipher = crypto.createCipher(algorithm,password)
//   var crypted = cipher.update(text,'utf8','hex')
//   crypted += cipher.final('hex');
//   return crypted;
// }

// function decrypt(text,password){
//   var decipher = crypto.createDecipher(algorithm,password)
//   var dec = decipher.update(text,'hex','utf8')
//   dec += decipher.final('utf8');
//   return dec;
// }

export async function GET(request: Request) {
  await sessionMiddleware(request);

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
  const { candidate, ineId } = await request.json()

  await sessionMiddleware(request);

  const _doc = await getDoc(doc(firestore, 'votation', ineId))

  if (_doc.exists()) {
    return NextResponse.json({ success: true })
  }

  await setDoc(
    doc(firestore, 'votation', ineId),
    {
      candidate
    },
  );

  return NextResponse.json({ success: true })
}
