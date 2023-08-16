'use client';

import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import ky from 'ky';
import { useParams, useRouter } from 'next/navigation';
import ReactJson from 'react-json-view';
import { Box, Button } from '@chakra-ui/react';

import { Credential } from '@/common/utilities/credentialStorage';

export default function Credential() {
  const { id } = useParams();
  const router = useRouter();

  const [credential, setCredential] = useState<Credential>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (credential) {
      return;
    }
    (async () => {
      try {
        setCredential(await ky.get(`/api/credentials/${id}`).json());
      } catch {
        setError(true);
      }
    })();
  }, [credential, id]);

  const [processing, setProcessing] = useState(false);
  const handleAttest = useCallback(async () => {
    try {
      setError(false);
      setProcessing(true);

      setCredential(
        await ky
          .post(`/api/credentials/${id}/attest`, {
            timeout: false,
            retry: {
              limit: 10,
              methods: ['post'],
            },
          })
          .json(),
      );
    } catch {
      setError(true);
    } finally {
      setProcessing(false);
    }
  }, [id]);

  const handleReject = useCallback(async () => {
    try {
      setError(false);

      await ky.delete(`/api/credentials/${id}`);

      router.push('/admin');
    } catch {
      setError(true);
    }
  }, [id, router]);

  const handleRevoke = useCallback(async () => {
    try {
      setError(false);
      setProcessing(true);

      setCredential(
        await ky
          .post(`/api/credentials/${id}/revoke`, {
            timeout: false,
            retry: {
              limit: 10,
              methods: ['post'],
            },
          })
          .json(),
      );
    } catch {
      setError(true);
    } finally {
      setProcessing(false);
    }
  }, [id]);

  if (!credential) {
    return error ? <p>Credential not found</p> : null;
  }

  const { claim, attestation } = credential;

  return (
    <>
      <section className="max-w-full overflow-x-auto p-4 border">
        <ReactJson src={claim} />
      </section>
      <Box flex="column" p={4}>
        {!attestation && (
          <div className="flex gap-4">
            <Button disabled={processing} onClick={handleAttest}>
              Attest
            </Button>
            <Button disabled={processing} onClick={handleReject}>
              Reject
            </Button>
          </div>
        )}

        {attestation && !attestation.revoked && (
          <div>
            <p>Attested ✅</p>
            <Button disabled={processing} onClick={handleRevoke}>
              Revoke
            </Button>
          </div>
        )}

        {attestation && attestation.revoked && <p>Revoked ❌</p>}

        {processing && <p>Processing...</p>}

        {error && <p>Oops, there was an error</p>}
      </Box>
    </>
  );
}
