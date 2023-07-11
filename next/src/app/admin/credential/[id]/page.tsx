"use client"

import { useCallback, useEffect, useState } from 'react';
import ky from 'ky';
import { useParams, useRouter } from 'next/navigation'

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
        setCredential(
          await ky
            .get(`/api/credentials/${id}`)
            .json(),
        );
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
    <section>
      <pre>{JSON.stringify(claim, null, 4)}</pre>

      {!attestation && (
        <div>
          <button disabled={processing} onClick={handleAttest}>
            Attest
          </button>
          <button disabled={processing} onClick={handleReject}>
            Reject
          </button>
        </div>
      )}

      {attestation && !attestation.revoked && (
        <div>
          <p>Attested ✅</p>
          <button disabled={processing} onClick={handleRevoke}>
            Revoke
          </button>
        </div>
      )}

      {attestation && attestation.revoked && <p>Revoked ❌</p>}

      {processing && <p>Processing...</p>}

      {error && <p>Oops, there was an error</p>}
    </section>
  );
}
