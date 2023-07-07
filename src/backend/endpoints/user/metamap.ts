/* eslint-disable import/no-extraneous-dependencies */
import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { initializeApp, getApps } from 'firebase/app';

import { getFirestore, doc, setDoc } from 'firebase/firestore';
import axios from 'axios';

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
    const { accountId, validationId } = req.body;

    const { data } = await axios.get(
      `https://api.validations.truora.com/v1/validations/${validationId}`,
      {
        headers: {
          'Truora-API-Key':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiIiwiYWRkaXRpb25hbF9kYXRhIjoie30iLCJjbGllbnRfaWQiOiJUQ0llNTEwMjRiOTlmN2YwZDc2NzZhYTFlOGI1NWY3YmI4MiIsImV4cCI6MzI2NTQ3OTQ2MywiZ3JhbnQiOiIiLCJpYXQiOjE2ODg2Nzk0NjMsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xX1lZY2VRNXlxSSIsImp0aSI6ImVkMzZhMGQwLTYxYjgtNDQ0Ni04OWNmLWFiNDEwYWY5NDkyNCIsImtleV9uYW1lIjoicGVyYW50b3Rlc3QiLCJrZXlfdHlwZSI6ImJhY2tlbmQiLCJ1c2VybmFtZSI6InBlcmFudG9zZXJ2aWNlcy1wZXJhbnRvdGVzdCJ9.gVB8petsqNJAmwSUUF8AKwzx8UUezTpyqrsEIH36ses',
        },
      },
    );

    const docRef = await setDoc(
      doc(firestore, 'truora', 'testId_' + validationId),
      {
        ...data,
        accountId,
        validationId,
      },
    );

    res.json({
      docRef,
    });
  } catch (error) {
    logger.error(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
}

export const metamap = Router();

metamap.post('/api/truora', handler);
