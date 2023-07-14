import { useCallback, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Tooltip } from '@chakra-ui/react';
import { NotAllowedIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

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
      className={`flex items-center font-semibold py-1 text-xs h-[26px] ${btnStyle(
        isError,
        isLoading,
      )}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {isLoading ? (
        <Dna
          visible={true}
          height="30"
          width="40"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : isError ? (
        ''
      ) : (
        label
      )}
    </button>
  );
};

export function SporranConnect({
  onConnect,
}: {
  onConnect: (s: Session) => void;
}) {
  const { kilt } = apiWindow() || ({} as any);

  const [extensions, setExtensions] = useState<string[]>([]);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<FlowError>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
    <div className="flex items-center border text-black rounded-2xl px-6 py-0">
      {extensions.length === 0 && (
        <Tooltip label="Looking for a wallet… To make a claim you need to have e.g. Sporran wallet installed and have an identity configured in it.">
          <QuestionOutlineIcon className="my-1" />
        </Tooltip>
      )}

      {!error &&
        extensions.map((extension) => (
          <Button
            key={extension}
            onClick={() => handleConnect(extension)}
            isError={!!error}
            isLoading={processing}
            label={`Connect to ${kilt[extension].name}`}
          />
        ))}

      {!!error && (
        <Tooltip label={errors[error]}>
          <NotAllowedIcon className="my-1" />
        </Tooltip>
      )}
    </div>
  );
}
