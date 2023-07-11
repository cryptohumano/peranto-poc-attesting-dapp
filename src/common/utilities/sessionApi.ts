import ky from 'ky';
import { DidResourceUri } from '@kiltprotocol/sdk-js';

import { sessionHeader } from '@/common/constants';

export async function getSessionValues(): Promise<GetSessionOutput> {
  return ky.get('/api/session').json();
}


export interface CheckSessionInput {
  encryptionKeyUri: DidResourceUri;
  encryptedChallenge: string;
  nonce: string;
}

export interface GetSessionOutput {
  dAppEncryptionKeyUri: DidResourceUri;
  sessionId: string;
  challenge: string;
}

export async function checkSession(
  json: CheckSessionInput,
  sessionId: string,
): Promise<void> {
  const headers = { [sessionHeader]: sessionId };

  await ky.post('/api/session', { json, headers });
}
