
import { StatusCodes } from 'http-status-codes';
import NodeCache from 'node-cache';
import { DidResourceUri, DidUri, ICredential } from '@kiltprotocol/sdk-js';
import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import { firestore } from '@/common/utilities/firebase';
import { sessionHeader } from '@/common/constants';

export interface BasicSession {
  sessionId: string;
  did?: DidUri;
  encryptionKeyUri?: DidResourceUri;
  didChallenge?: string;
  didConfirmed?: boolean;
  credential?: ICredential;
}

export type Session = BasicSession & {
  did: DidUri;
  encryptionKeyUri: DidResourceUri;
};

// const sessionStorage = new NodeCache({ stdTTL: 5 * 60 * 60, useClones: false });

async function getSessionById(sessionId: string): Promise<BasicSession> {
  // const session = sessionStorage.get(sessionId);
  const _doc = await getDoc(doc(firestore, 'sessions', sessionId));
  const session = { ..._doc.data(), sessionId };

  if (!_doc.exists) {
    throw new Error(`Unknown or expired session ${sessionId}`);
  }

  return session as BasicSession;
}

async function getBasicSession(request: Request): Promise<BasicSession> {
  const sessionId = request.headers.get(sessionHeader);

  if (!sessionId) {
    throw new Error(`Required header ${sessionHeader} is missing`);
  }

  return await getSessionById(sessionId);
}

export async function getSession(request: Request): Promise<Session> {
  const session = await getBasicSession(request);

  const { did, didConfirmed, encryptionKeyUri } = session;

  if (!did || !didConfirmed || !encryptionKeyUri) {
    throw new Error('Unconfirmed DID');
  }

  return { ...session, did, encryptionKeyUri };
}

export function setSession(session: BasicSession): void {
  // sessionStorage.set(session.sessionId, session);

  setDoc(doc(firestore, 'sessions', session.sessionId), session);
}

export async function basicSessionMiddleware(
  request: Request
) {
  const session = await getBasicSession(request);

  return session as BasicSession;
}

export async function sessionMiddleware(
  request: Request,
) {
    const session = await (request);

    return session as Session
}
