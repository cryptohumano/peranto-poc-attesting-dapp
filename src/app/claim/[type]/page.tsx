'use client';

import React from 'react';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import ky from 'ky';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { IClaimContents, IEncryptedMessage } from '@kiltprotocol/sdk-js';

import { Session } from '@/common/utilities/session';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/common/utilities/firebase';
import {
  isSupportedCType,
  kiltCost,
  supportedCTypes,
} from '@/common/utilities/supportedCTypes';
import { sessionHeader } from '@/common/constants';
import { exceptionToError } from '@/common/utilities/exceptionToError';
import { Button, Connect, FlowError, errors } from '@/app/components/Buttons';

const INECtypeForm = ({ properties }: any) => {
  const [waitResponse, setWaitResponse] = useState<any>(false);
  const [payload, setPayload] = useState<any>();

  useEffect(() => {
    const m = JSON.parse(
      (localStorage.getItem(`truoraFlow_document-validation`) || null) as any,
    );

    if (m === null) return;

    if (m.validation_status === 'success') {
      const {
        name,
        first_last_name,
        last_name,
        date_of_birth,
        machine_readable,
      } = m.details.document_details;

      setPayload({
        fullName: `${name} ${first_last_name} ${last_name}`,
        dateOfBirth: date_of_birth,
        ineID: machine_readable,
      });
    } else {
      setWaitResponse(true);

      onSnapshot(doc(firestore, 'truora', m.id), (doc) => {
        const data = doc.data();

        if (!doc.exists) return;

        if (data?.validation_status === 'success') {
          const {
            name,
            first_last_name,
            last_name,
            date_of_birth,
            machine_readable,
          } = data.details.document_details;

          setPayload({
            fullName: `${name} ${first_last_name} ${last_name}`,
            dateOfBirth: date_of_birth,
            ineID: machine_readable,
          });
        }

        if (data?.validation_status === 'failure') {
          setPayload({
            failure: data.declined_reason,
          });
        }

        setWaitResponse(false);
      });
    }
  }, []);

  useEffect(() => {
    if (payload) {
      (document.querySelector('[name="email"]') as any).value = payload.ineID;
      (document.querySelector('[name="username"]') as any).value =
        payload.fullName;
    }
  }, [payload]);

  const handleResetFlow = () => {
    localStorage.removeItem(`truoraFlow_document-validation`);

    location.reload();
  };

  return (
    <>
      {!waitResponse && payload?.failure ? (
        <>
          <p className="text-red">Validation not successful</p>
          <br />
          <span className="text-red-400 mb-8">
            <span className="font-bold text-red-600">Error: </span>
            {payload.failure}
          </span>
        </>
      ) : payload ? (
        <>
          <p>Validation successful!</p>
          <br />
          <table className="table mb-8">
            <tr>
              <td>Name: </td>
              <td className="break-all">{payload.fullName}</td>
            </tr>
            <tr>
              <td>Date of birth:</td>
              <td className="break-all">{payload.dateOfBirth}</td>
            </tr>
            <tr>
              <td>INE</td>
              <td className="break-all">{payload.ineID}</td>
            </tr>
          </table>
        </>
      ) : null}

      {!waitResponse && payload?.failure && (
        <button className="btn btn-error mb-8" onClick={handleResetFlow}>
          Try Truora validation again
        </button>
      )}

      {!waitResponse && !payload && (
        <a
          className="btn btn-info mt-4 mb-8"
          href="https://identity.truora.com/preview/IPFcbd9b16226d31a44b0b22eda776afd0d"
        >
          Validation with Truora
        </a>
      )}
      {waitResponse && (
        <p className="mt-4 mb-8">Waiting for Truora response.</p>
      )}
      <>
        {Object.keys(properties).map((property) => (
          <label className="hidden" key={property}>
            {property}:
            <input name={property} required />
          </label>
        ))}
      </>
    </>
  );
};

const GenericCtypeForm = ({ properties }: any) => (
  <>
    <>
      {Object.keys(properties).map((property) => (
        <label key={property}>
          {property}:
          <input name={property} required />
        </label>
      ))}
    </>
  </>
);

const ctypeForms = {
  [supportedCTypes.ine.$id]: INECtypeForm,
  [supportedCTypes.email.$id]: GenericCtypeForm,
  [supportedCTypes.twitter.$id]: GenericCtypeForm,
};

export default function Claim() {
  const { type } = useParams();

  const [session, setSession] = useState<Session>();
  const [status, setStatus] = useState<'start' | 'requested' | 'paid'>('start');
  const [error, setError] = useState<FlowError>();
  const [loading, setLoading] = useState(false);

  const handleConnect = useCallback((session: Session) => {
    setSession(session);
  }, []);

  const handleClaim = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(undefined);
      setLoading(true);

      if (!session || !type || !isSupportedCType(type)) {
        return;
      }

      const claimContents = Object.fromEntries(
        new FormData(event.currentTarget).entries(),
      ) as IClaimContents;

      try {
        const { sessionId } = session;
        const headers = { [sessionHeader]: sessionId };
        // define in advance how to handle the response from the extension
        await session.listen(async (message) => {
          await ky.post('/api/requestAttestation', {
            headers,
            json: message,
          });
          setStatus('requested');
        });

        // encrypt submit-terms message on the backend
        const message: IEncryptedMessage = await ky
          .post('/api/terms', {
            headers,
            json: { type, claimContents },
          })
          .json();

        // forward the encrypted message to the extension
        await session.send(message);
      } catch (exception) {
        const { message } = exceptionToError(exception);
        if (message.includes('closed') || message.includes('Conflict')) {
          setError('closed');
        } else if (message.includes('Not authorized')) {
          setError('unauthorized');
        } else {
          setError('unknown');
          console.error(exception);
        }
      } finally {
        setLoading(false);
      }
    },
    [session, type],
  );

  // implement your preferred payment service
  const handlePayment = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(undefined);

      if (!session) {
        return;
      }

      try {
        const { sessionId } = session;
        const headers = { [sessionHeader]: sessionId };

        await ky.post('/api/pay', { headers });

        setStatus('paid');
      } catch (error) {
        console.error(error);
        setError('unknown');
      }
    },
    [session],
  );

  if (!type || !isSupportedCType(type)) {
    return <p>Error - Unsupported CType</p>;
  }

  const cType = supportedCTypes[type];
  const { title, properties, $id } = cType;
  const Form = ctypeForms[$id];

  return (
    <section className="bg-base-200 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body flex flex-col gap-4">
          <div className="relative">
            <Link
              href="/"
              className="absolute -top-7 -left-2 text-xs flex items-center btn btn-link p-0 m-0"
            >
              {'<'}
            </Link>
          </div>

          <div className="flex justify-between items-end mt-2">
            <h2 className="text-xl">
              {title === 'Authorization' ? 'INE' : title}
            </h2>
            <span>Price: {kiltCost[type]} KILT</span>
          </div>

          <div className="flex flex-col items-center">
            <form
              className="my-2 flex flex-col items-center"
              onSubmit={handleClaim}
            >
              {status === 'start' && <Form properties={properties} />}

              {!session && <Connect onConnect={handleConnect} />}
              {session && (
                <Button
                  isLoading={loading}
                  isError={!!error}
                  label="Submit"
                  isSubmit
                />
              )}
            </form>

            {status === 'requested' && (
              <form onSubmit={handlePayment}>
                <p>Thanks for your request. Please pay</p>
                <button>Pay</button>
              </form>
            )}

            {status === 'paid' && (
              <p>
                Thanks for your payment! Your request has been sent to the
                attester for processing. You can check the attestation status in
                your wallet.
              </p>
            )}

            {error && errors[error]}
          </div>
        </div>
      </div>
    </section>
  );
}
