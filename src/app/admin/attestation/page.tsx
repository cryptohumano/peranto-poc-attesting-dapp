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
import { Did } from '@kiltprotocol/sdk-js';

import { Credential } from '@/common/utilities/credentialStorage';
import { sporranState } from '../../layout';
import { useHookstate } from '@hookstate/core';
import { sessionHeader } from '@/common/constants';

const getW3N = async (did: string) => {
  const resolutionResult = await Did.resolve(did as any);

  console.log(resolutionResult);
  return did;
};

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
              <Th>Owner</Th>
              <Th>#</Th>
            </Tr>
          </Thead>
          <Tbody>
            {credentials.map(([id, credential]) => (
              <Tr key={id} fontSize="xs">
                <Td>
                  {credential.claim?.claim && credential.claim.claim?.owner}
                </Td>
                <Td>
                  <Link
                    color="purple"
                    href={`/admin/attestation/credential/${id}`}
                  >
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

  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const headers = { [sessionHeader]: session?.sessionId };

  useEffect(() => {
    (async () => {
      try {
        if (!session?.sessionId || credentials) return;

        const _credentials = await ky
          .get('/api/credentials', { headers })
          .json<Record<string, Credential>>();

        setCredentials(Object.entries(_credentials));
      } catch {
        setError(true);
      }
    })();
  }, [headers, session?.sessionId, credentials]);

  // if (!session || !~session?.encryptionKeyUri.indexOf('XJayjT5V88GvL'))
  // return <p>Wallet has no access to admin panel</p>;

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
