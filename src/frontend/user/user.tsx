/* eslint-disable import/no-extraneous-dependencies */
import { createRoot } from 'react-dom/client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter,
  generatePath,
  Link,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import { onSnapshot, getFirestore, doc } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

import ky from 'ky';
import { IClaimContents, IEncryptedMessage } from '@kiltprotocol/sdk-js';

import {
  apiWindow,
  getCompatibleExtensions,
  getSession,
  Session,
} from '../utilities/session';
import { exceptionToError } from '../utilities/exceptionToError';
import { paths } from '../utilities/paths';

import {
  kiltCost,
  supportedCTypes,
  supportedCTypeKeys,
  isSupportedCType,
} from '../../backend/utilities/supportedCTypes';
import { paths as apiPaths } from '../../backend/endpoints/paths';
import { sessionHeader } from '../../backend/endpoints/user/sessionHeader';

const firebaseConfig = {
  apiKey: 'AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc',
  authDomain: 'peranto-test.firebaseapp.com',
  projectId: 'peranto-test',
  storageBucket: 'peranto-test.appspot.com',
  messagingSenderId: '777447831295',
  appId: '1:777447831295:web:6a987d7c8b307ecef43eca',
};

const apps = getApps();

export const firebase =
  apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React.JSX {
    interface IntrinsicElements {
      'mati-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & any,
        HTMLElement
      >;
    }
  }
}

type FlowError = 'closed' | 'unauthorized' | 'unknown';

const errors: Record<FlowError, JSX.Element> = {
  closed: <p>Your wallet was closed. Please try again.</p>,
  unauthorized: (
    <p>
      The authorization was rejected. Follow the instructions on our Tech
      Support site to establish the connection between this attester and your
      wallet.
      <a
        href="https://support.kilt.io/support/solutions/articles/80000968082-how-to-grant-access-to-website"
        target="_blank"
        rel="noreferrer"
      >
        Tech Support
      </a>
    </p>
  ),
  unknown: (
    <p>
      Something went wrong! Try again or reload the page or restart your
      browser.
    </p>
  ),
};

function calculateAge(dob: Date) {
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function Connect({ onConnect }: { onConnect: (s: Session) => void }) {
  const { kilt } = apiWindow;

  const [extensions, setExtensions] = useState(getCompatibleExtensions());

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<FlowError>();

  useEffect(() => {
    function handler() {
      setExtensions(getCompatibleExtensions());
    }

    window.dispatchEvent(new CustomEvent('kilt-dapp#initialized'));
    window.addEventListener('kilt-extension#initialized', handler);
    return () =>
      window.removeEventListener('kilt-extension#initialized', handler);
  }, []);

  const handleConnect = useCallback(
    async (extension: string) => {
      try {
        setProcessing(true);
        setError(undefined);

        onConnect(await getSession(kilt[extension]));
      } catch (exception) {
        const { message } = exceptionToError(exception);
        if (message.includes('closed')) {
          setError('closed');
        } else if (message.includes('Not authorized')) {
          setError('unauthorized');
        } else {
          setError('unknown');
          console.error(exception);
        }
        setProcessing(false);
      }
    },
    [onConnect, kilt],
  );
  return (
    <section>
      {extensions.length === 0 && (
        <p>
          Looking for a wallet… To make a claim you need to have e.g. Sporran
          wallet installed and have an identity configured in it.
        </p>
      )}

      {extensions.map((extension) => (
        <button
          className="btn btn-active btn-primary"
          key={extension}
          type="button"
          onClick={() => handleConnect(extension)}
        >
          Connect to {kilt[extension].name}
        </button>
      ))}

      {processing && <p>Connecting…</p>}

      {error && errors[error]}
    </section>
  );
}

function Claim() {
  const { type } = useParams();

  const [verificationId, setVerificationId] = useState('');
  const [session, setSession] = useState<Session>();
  const [status, setStatus] = useState<'start' | 'requested' | 'paid'>('start');
  const [error, setError] = useState<FlowError>();

  useEffect(() => {
    if (verificationId)
      onSnapshot(
        // doc(firestore, 'metamap', 'testId_verification_completed'),
        doc(firestore, 'metamap', 'testId_verification_started'),
        (doc: any) => {
          const data = doc.data();

          const parsed = JSON.parse(data.payload);

          const docs = parsed.documents[0];

          const age = calculateAge(new Date(docs.fields.dateOfBirth.value));
          const name = docs.fields.fullName.value;

          (document.querySelector('[name="email"]') as any).value = name;
          (document.querySelector('[name="username"]') as any).value = age;
        },
      );
  }, [verificationId]);

  const triggerListener = () => {
    const button: any = document.querySelector('mati-button');

    button?.addEventListener('mati:userStartedSdk', ({ detail }: any) => {
      setVerificationId(detail.verificationId);
    });
  };

  const handleConnect = useCallback((session: Session) => {
    setSession(session);
  }, []);

  const handleClaim = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(undefined);

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
          await ky.post(apiPaths.requestAttestation, {
            headers,
            json: message,
          });
          setStatus('requested');
        });

        // encrypt submit-terms message on the backend
        const message: IEncryptedMessage = await ky
          .post(apiPaths.terms, {
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
        await ky.post(apiPaths.pay, { headers });
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
  const { title, properties } = cType;

  return (
    <section>
      <h2>{title}</h2>
      <p className="mb-4">Price: {kiltCost[type]} KILT</p>

      {status === 'start' && type === 'id' && (
        // implement custom claim forms if you want to handle non-string properties
        <>
          <div onMouseEnter={triggerListener}>
            <mati-button
              clientid="64811ce44d683b001b9013f0"
              flowId="64811ce44d683b001b9013ef"
            />
          </div>
          <form className="my-2" onSubmit={handleClaim}>
            {Object.keys(properties).map((property) => (
              <label className="hidden" key={property}>
                {property}:
                <input name={property} disabled={!session} required />
              </label>
            ))}

            {!session && <Connect onConnect={handleConnect} />}

            {session && (
              <button className="btn btn-active btn-primary" type="submit">
                Submit
              </button>
            )}
          </form>
        </>
      )}

      {status === 'start' && type !== 'id' && (
        // implement custom claim forms if you want to handle non-string properties
        <>
          <form onSubmit={handleClaim}>
            {Object.keys(properties).map((property) => (
              <label key={property}>
                {property}:
                <input name={property} disabled={!session} required />
              </label>
            ))}

            {!session && <Connect onConnect={handleConnect} />}

            {session && (
              <button className="btn btn-active btn-primary" type="submit">
                Submit
              </button>
            )}
          </form>
        </>
      )}

      {status === 'requested' && (
        <form onSubmit={handlePayment}>
          <p>Thanks for your request. Please pay</p>
          <button>Pay</button>
        </form>
      )}

      {status === 'paid' && (
        <p>
          Thanks for your payment! Your request has been sent to the attester
          for processing. You can check the attestation status in your wallet.
        </p>
      )}

      {error && errors[error]}

      <Link to={paths.home}>Back</Link>
    </section>
  );
}

function Home() {
  return (
    <section className="bg-base-200 kilt-bg">
      <div className="hero min-h-screen container mx-auto max-w-5xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Peranto Attest App</h1>
            <p className="py-6">
              This KILT Attester Example demonstrates how to issue credentials
              for a couple basic claim types which already exist on the KILT
              blockchain. The user chooses a claim type, enters the claim data,
              makes a (mock) payment, and the claim is sent to the attester to
              be reviewed.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p>Start selecting a claim type:</p>

              <ul className="menu w-56 rounded-box">
                {supportedCTypeKeys.map((type, k) => (
                  <li key={type}>
                    <Link
                      className="link link-primary"
                      to={generatePath(paths.claim, { type })}
                    >
                      {k === 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      )}
                      {k === 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {k === 2 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      )}
                      {supportedCTypes[type].title === 'Authorization'
                        ? 'INE'
                        : supportedCTypes[type].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.claim} element={<Claim />} />

      <Route path="*" element={<p>404 - Not found</p>} />
    </Routes>
  </BrowserRouter>,
);
