import { initializeApp, getApps } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {

  doc,
  getDoc,

  setDoc,
  updateDoc,

} from 'firebase/firestore';
import axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc',
  authDomain: 'peranto-test.firebaseapp.com',
  projectId: 'peranto-test',
  storageBucket: 'peranto-test.appspot.com',
  messagingSenderId: '777447831295',
  appId: '1:777447831295:web:6a987d7c8b307ecef43eca',
};

const apps = getApps();

export const firebase =
  apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);

export const storage = getStorage(firebase);

export const sendChatMsg = async (message: string, senderDid: string, recipientDid: string, headers: any) => {
  const { data } = await axios.post(
    '/api/chat',
    { message, senderDid, recipientDid },
    { headers },
  );

  const msg = {
    message: data?.encryptedMessage,
    timestamp: Date.now(),
    read: false,
  };

  const docRefSender = doc(firestore, 'chat', senderDid);
  const docRefRecipient = doc(firestore, 'chat', recipientDid);

  const _docSender = await getDoc(docRefSender);
  const _docRecipient = await getDoc(docRefRecipient);

  if (_docSender.exists()) {
    const recipientChat = _docSender.data()[recipientDid] || [];

    await updateDoc(docRefSender, {
      [recipientDid]: [...recipientChat, msg],
    });
  } else {
    await setDoc(docRefSender, {
      [recipientDid]: [msg],
    });
  }

  if (_docRecipient.exists()) {
    const recipientNotifications =
      _docRecipient.data()[`${senderDid}-Notifications`] || 0;

    await updateDoc(docRefRecipient, {
      [`${senderDid}-Notifications`]: recipientNotifications + 1,
    });
  } else {
    await setDoc(docRefRecipient, {
      [`${senderDid}-Notifications`]: 1,
    });
  }
}
