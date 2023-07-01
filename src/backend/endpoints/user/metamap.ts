import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { initializeApp } from "firebase/app";

import { logger } from '../../utilities/logger';
import { Session, sessionMiddleware } from '../../utilities/sessionStorage';
import { paths } from '../paths';
import { addClaim } from '../../utilities/credentialStorage';

const firebaseConfig = {
  apiKey: 'AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc',
  authDomain: 'peranto-test.firebaseapp.com',
  projectId: 'peranto-test',
  storageBucket: 'peranto-test.appspot.com',
  messagingSenderId: '777447831295',
  appId: '1:777447831295:web:6a987d7c8b307ecef43eca',
};

const app = initializeApp(firebaseConfig);

async function handler(req: Request, res: Response): Promise<void> {
  try {
    res.json({
      true: true,
    });
  } catch (error) {
    logger.error(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
}

export const metamap = Router();

metamap.get('metamap', handler);
