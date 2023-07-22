'use client';

import React from 'react';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import ky from 'ky';

import { Box, Button as Btn } from '@chakra-ui/react';

import { IClaimContents, IEncryptedMessage } from '@kiltprotocol/sdk-js';

import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/common/utilities/firebase';
import {
  isSupportedCType,
  kiltCost,
  supportedCTypes,
} from '@/common/utilities/supportedCTypes';
import { sessionHeader } from '@/common/constants';
import { exceptionToError } from '@/common/utilities/exceptionToError';
import { Button, FlowError, errors } from '@/app/components/Buttons';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';

const getCURP = (
  name: string,
  firstLastName: string,
  lastName: string,
  _day: string,
  _month: string,
  year: string,
) => {
  const monthNumber = parseInt(_month);
  const monthParsed = monthNumber < 10 ? '0' + monthNumber : monthNumber;
  const dayNumber = parseInt(_day);
  const dayParsed = dayNumber < 10 ? '0' + dayNumber : dayNumber;

  return `${firstLastName.toUpperCase().slice(0, 2)}${lastName
    .toUpperCase()
    .charAt(0)}${name.toUpperCase().charAt(0)}${year.slice(
    0,
    2,
  )}${monthParsed}${dayParsed}`;
};

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
          className="mt-4 mb-8"
          href="https://identity.truora.com/preview/IPFcbd9b16226d31a44b0b22eda776afd0d"
        >
          <Btn
            colorScheme="blue"
            variant="solid"
            bgColor="blue.700 !important"
            _hover={{ bgColor: 'blue.500 !important' }}
          >
            Validation with Truora
          </Btn>
        </a>
      )}
      {waitResponse && (
        <p className="mt-4 mb-8">Waiting for Truora response.</p>
      )}
      <>
        {Object.keys(payload || {}).map((property) => (
          <label className="hidden" key={property}>
            {property}:
            <input name={property} defaultValue={payload[property]} required />
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

export default function Claim({ type }: any) {
  const [status, setStatus] = useState<'start' | 'requested' | 'paid'>('start');
  const [error, setError] = useState<FlowError>();
  const [loading, setLoading] = useState(false);
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

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

      if (Object.keys(claimContents).some((field) => !claimContents[field])) {
        setError('missingFields');
        setLoading(false);

        return;
      }

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
    return <p className="text-center">Error - Unsupported CType</p>;
  }

  const cType = supportedCTypes[type];
  const { title, properties, $id } = cType;
  const Form = ctypeForms[$id];

  return (
    <section className="flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl flex-shrink-0 w-full max-w-lg">
        <div className="card-body flex flex-col gap-4">
          <div className="flex justify-between items-end mt-2">
            <Box textStyle="h2" fontSize="lg" fontWeight="bold">
              Credential: {title === 'Authorization' ? 'INE' : title}
            </Box>
            <Box textStyle="paragraph" fontSize="lg" fontWeight="bold">
              Price: {kiltCost[type]} KILT
            </Box>
          </div>

          <div className="flex flex-col items-center pt-16">
            <form
              className="my-2 flex flex-col items-center"
              onSubmit={handleClaim}
              noValidate
            >
              {status === 'start' && <Form properties={properties} />}

              {!session && (
                <Button
                  isLoading={loading}
                  isError={!!error}
                  label="Connect Sporran"
                  isSubmit
                  disabled
                />
              )}

              {session && (
                <Button
                  isLoading={loading}
                  isError={!!error}
                  label="Submit new credential"
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

            <Box color="red.500" fontWeight="semibold">
              {error && errors[error]}
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
