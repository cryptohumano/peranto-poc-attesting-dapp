'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import ky from 'ky';
import {
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { Credential } from '@/common/utilities/credentialStorage';
import { sporranState } from '../layout';
import { useHookstate } from '@hookstate/core';

function Credentials({
  credentials,
  title,
}: {
  credentials: [string, Credential][];
  title: string;
}) {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="telegram">
          <TableCaption placement="top">{title}</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Claim Hash</Th>
              <Th>#</Th>
            </Tr>
          </Thead>
          <Tbody>
            {credentials.map(([id, credential]) => (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{credential.attestation?.claimHash}</Td>
                <Td>
                  <Link color="purple" href={`/admin/credential/${id}`}>
                    Link
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
  return (
    <ul>
      {credentials.map(([id]) => (
        <li key={id}></li>
      ))}
    </ul>
  );
}

export default function Admin() {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  console.log('sesso', session);

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

  if (!session || !~session?.encryptionKeyUri.indexOf('XJayjT5V88GvL'))
    return <p>Wallet has no access to admin panel</p>;

  if (!credentials) {
    return error ? <p>Unable to fetch credentials</p> : null;
  }

  return (
    <section>
      <h1 className="mb-8">Admin Page</h1>
      {credentials.length === 0 && <p>No credentials</p>}

      {pendingCredentials && pendingCredentials.length > 0 && (
        <section>
          <Credentials
            credentials={pendingCredentials}
            title="Pending credentials"
          />
        </section>
      )}

      {attestedCredentials && attestedCredentials.length > 0 && (
        <section>
          <Credentials
            credentials={attestedCredentials}
            title="Attested credentials"
          />
        </section>
      )}

      {revokedCredentials && revokedCredentials.length > 0 && (
        <section>
          <Credentials
            credentials={revokedCredentials}
            title="Revoked credentials"
          />
        </section>
      )}
    </section>
  );
}
