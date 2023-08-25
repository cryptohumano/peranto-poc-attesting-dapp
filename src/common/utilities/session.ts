import { connect } from '@kiltprotocol/sdk-js';

import { configuration } from './configuration';
import * as Kilt from '@kiltprotocol/sdk-js';

import type { DidResourceUri, IEncryptedMessage } from '@kiltprotocol/sdk-js';

import {
  checkSession,
  getSessionValues,
} from './sessionApi';

interface PubSubSession {
  listen: (
    callback: (message: IEncryptedMessage) => Promise<void>,
  ) => Promise<void>;
  close: () => Promise<void>;
  send: (message: IEncryptedMessage) => Promise<void>;
  encryptionKeyUri: DidResourceUri;
  encryptedChallenge: string;
  nonce: string;
}

interface InjectedWindowProvider {
  startSession: (
    dAppName: string,
    dAppEncryptionKeyUri: DidResourceUri,
    challenge: string,
  ) => Promise<PubSubSession>;
  getDidList: () => { did: DidResourceUri }[]
  name: string;
  version: string;
  specVersion: '3.0';
}

export const apiWindow = () => typeof window !== "undefined" && window as unknown as {
  kilt: Record<string, InjectedWindowProvider>;
};

export function getCompatibleExtensions(): Array<string> {
  return Object.entries((apiWindow() || { kilt: {} }).kilt)
    .filter(([, provider]) => provider.specVersion.startsWith('3.'))
    .map(([name]) => name);
}

export type Session = PubSubSession & {
  sessionId: string;
  name: string;
};

export async function getSession(
  provider: InjectedWindowProvider,
): Promise<Session> {
  if (!provider) {
    throw new Error('No provider');
  }

  const { dAppEncryptionKeyUri, challenge, sessionId } =
    await getSessionValues();
  const dAppName = 'Peranto Attest App';

  const session = await provider.startSession(
    dAppName,
    dAppEncryptionKeyUri,
    challenge,
  );

  await connect(configuration.blockchainEndpoint);

  const api = Kilt.ConfigService.get('api')
  const did = await api.call.did.query(session?.encryptionKeyUri)

  if (typeof window !== "undefined") (window as any).meta = {
    provider,
    session,
    did
  }

  let selectedDid

  if (~location.pathname.indexOf("/admin/")) {
    const [{ did }] = await provider.getDidList()

    selectedDid = did
  }


  const { encryptionKeyUri, encryptedChallenge, nonce } = session;

  await checkSession(
    {
      selectedDid,
      encryptionKeyUri,
      encryptedChallenge,
      nonce,
    },
    sessionId,
  );

  const { name } = provider;

  return { ...session, sessionId, name };
}
