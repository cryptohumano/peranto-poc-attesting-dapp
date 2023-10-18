import { initializeApp, getApps } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
