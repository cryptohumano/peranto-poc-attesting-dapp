/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { initializeApp, getApps } from 'firebase/app';

import { getFirestore, doc, updateDoc } from 'firebase/firestore';

import { logger } from '../../utilities/logger';

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

// WH SECRET oEI07pv3tHbQ1069H61r35C0K
async function handler(req: Request, res: Response): Promise<void> {
  try {
    const { flowId, eventName } = req.body;

    const docRef = await updateDoc(doc(firestore, 'metamap', flowId), {
      [eventName]: req.body,
    });

    res.json({
      docRef,
    });
  } catch (error) {
    logger.error(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
}

export const metamap = Router();

metamap.post('/api/metamap', handler);
