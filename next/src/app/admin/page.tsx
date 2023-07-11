"use client"

import { useEffect, useState } from 'react';
import ky from 'ky';
import Link from 'next/link';

import { Credential } from '@/common/utilities/credentialStorage';


function Credentials({ credentials }: { credentials: [string, Credential][] }) {
  return (
    <ul>
      {credentials.map(([id]) => (
        <li key={id}>
          <Link href={`/admin/credential/${id}`}>{id}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Admin() {
  const [credentials, setCredentials] = useState<[string, Credential][]>();
  const [error, setError] = useState(false);

  const pendingCredentials = credentials?.filter(
    ([, { attestation }]) => !attestation,
  );
  const attestedCredentials = credentials?.filter(
    ([, { attestation }]) => attestation && !attestation.revoked,
  );
  const revokedCredentials = credentials?.filter(
    ([, { attestation }]) => attestation && attestation.revoked,
  );

  useEffect(() => {
    (async () => {
      try {
        const credentials = await ky
          .get('/api/credentials')
          .json<Record<string, Credential>>();

        setCredentials(Object.entries(credentials));
      } catch {
        setError(true);
      }
    })();
  }, []);

  if (!credentials) {
    return error ? <p>Unable to fetch credentials</p> : null;
  }

  return (
    <section>
      <h1>Admin Page</h1>
      {credentials.length === 0 && <p>No credentials</p>}

      {pendingCredentials && pendingCredentials.length > 0 && (
        <section>
          <h2>Pending credentials</h2>
          <Credentials credentials={pendingCredentials} />
        </section>
      )}

      {attestedCredentials && attestedCredentials.length > 0 && (
        <section>
          <h2>Attested credentials</h2>
          <Credentials credentials={attestedCredentials} />
        </section>
      )}

      {revokedCredentials && revokedCredentials.length > 0 && (
        <section>
          <h2>Revoked credentials</h2>
          <Credentials credentials={revokedCredentials} />
        </section>
      )}
    </section>
  );
}
