import { useCallback, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';

import {
  apiWindow,
  getCompatibleExtensions,
  getSession,
  Session,
} from '@/common/utilities/session';
import { exceptionToError } from '@/common/utilities/exceptionToError';

export type FlowError = 'closed' | 'unauthorized' | 'unknown';

export const btnStyle = (isError: boolean, processing: boolean) =>
  processing
    ? 'bg-base-100 border-none'
    : isError
    ? 'btn-error'
    : 'btn-neutral';

export const errors: Record<FlowError, JSX.Element> = {
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

export const Button = ({
  onClick,
  isError,
  isLoading,
  label,
  isSubmit,
}: any) => {
  return (
    <button
      className={`btn ${btnStyle(isError, isLoading)} btn-active max-w-[200px]`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {isLoading ? (
        <Dna
          visible={true}
          height="40"
          width="40"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : isError ? (
        'Try again'
      ) : (
        label
      )}
    </button>
  );
};

export function Connect({ onConnect }: { onConnect: (s: Session) => void }) {
  const { kilt } = apiWindow();

  const [extensions, setExtensions] = useState<string[]>([]);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<FlowError>();

  useEffect(() => {
    function handler() {
      setExtensions(getCompatibleExtensions());
    }

    const script = document.createElement('script');

    script.innerHTML = `
      window.kilt = {};

      Object.defineProperty(window.kilt, 'meta', {
        value: { versions: { credentials: '3.0' } },
        enumerable: false,
      });
    `;

    document.querySelector('head')?.appendChild(script);

    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('kilt-dapp#initialized'));
    }, 300);

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
    <section className="flex flex-col items-center gap-4 text-justify">
      {extensions.length === 0 && (
        <p>
          Looking for a wallet… To make a claim you need to have e.g. Sporran
          wallet installed and have an identity configured in it.
        </p>
      )}

      {extensions.map((extension) => (
        <Button
          key={extension}
          onClick={() => handleConnect(extension)}
          isError={!!error}
          isLoading={processing}
          label={`Connect to ${kilt[extension].name}`}
        />
      ))}

      {error && errors[error]}
    </section>
  );
}
