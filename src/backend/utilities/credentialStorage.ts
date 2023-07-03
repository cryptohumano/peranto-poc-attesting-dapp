/* eslint-disable import/no-extraneous-dependencies */
import { randomUUID } from 'node:crypto';

import { IAttestation, ICredential } from '@kiltprotocol/sdk-js';
import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../endpoints/user/metamap';

export class NotFoundError extends Error {}

export interface Credential {
  claim: ICredential;
  attestation?: IAttestation;
}

// Maps are used for example purposes. A real database should be used in production.
const credentials: Map<string, Credential> = new Map();

export function addClaim(claim: ICredential) {
  const id = randomUUID();
  // credentials.set(id, { claim });

  setDoc(doc(firestore, 'credentials', id), { claim });
}

export async function listCredentials() {
  // return Object.fromEntries(credentials.entries());

  let result: any = {};
  const docs = await getDocs(collection(firestore, 'credentials'));

  docs.forEach((doc) => {
    result = { ...result, [doc.id]: { ...doc.data(), id: doc.id } };
  });

  return result;
}

export async function getCredential(id: string) {
  // const credential = credentials.get(id);
  const _doc = await getDoc(doc(firestore, 'credentials', id));
  const credential = { ..._doc.data(), id };

  if (!credential) {
    throw new NotFoundError('Credential not found');
  }

  return credential;
}

export function deleteCredential(id: string) {
  const deleted = credentials.delete(id);

  if (!deleted) {
    throw new NotFoundError('Credential not found');
  }
}

export async function addAttestation(id: string, attestation: IAttestation) {
  const credential = await getCredential(id);

  // credentials.set(id, { ...credential, attestation });
  await updateDoc(doc(firestore, 'credentials', id), {
    ...credential,
    attestation,
  });

  return await getCredential(id);
}
