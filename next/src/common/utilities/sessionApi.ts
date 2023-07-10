import ky from 'ky';

import { CheckSessionInput, GetSessionOutput } from '@/app/api/session';
import { sessionHeader } from '@/common/constants';

export async function getSessionValues(): Promise<GetSessionOutput> {
  return ky.get('/api/session').json();
}

export async function checkSession(
  json: CheckSessionInput,
  sessionId: string,
): Promise<void> {
  const headers = { [sessionHeader]: sessionId };

  await ky.post('/api/session', { json, headers });
}
