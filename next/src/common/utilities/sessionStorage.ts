
import { StatusCodes } from 'http-status-codes';
import NodeCache from 'node-cache';
import { DidResourceUri, DidUri, ICredential } from '@kiltprotocol/sdk-js';

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

const sessionStorage = new NodeCache({ stdTTL: 5 * 60 * 60, useClones: false });

function getSessionById(sessionId: string): BasicSession {
  const session = sessionStorage.get(sessionId);

  if (!session) {
    throw new Error(`Unknown or expired session ${sessionId}`);
  }
  return session as BasicSession;
}

function getBasicSession(request: Request): BasicSession {
  const sessionId = request.headers.get(sessionHeader);

  if (!sessionId) {
    throw new Error(`Required header ${sessionHeader} is missing`);
  }

  return getSessionById(sessionId);
}

export function getSession(request: Request): Session {
  const session = getBasicSession(request);

  const { did, didConfirmed, encryptionKeyUri } = session;

  if (!did || !didConfirmed || !encryptionKeyUri) {
    throw new Error('Unconfirmed DID');
  }

  return { ...session, did, encryptionKeyUri };
}

export function setSession(session: BasicSession): void {
  sessionStorage.set(session.sessionId, session);
}

export function basicSessionMiddleware(
  request: Request
) {
  const session = getBasicSession(request);

  return session as BasicSession;
}

export function sessionMiddleware(
  request: Request,
) {
    const session = getSession(request);

    return session as Session
}
