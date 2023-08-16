'use client';

import { waitReady } from '@polkadot/wasm-crypto';
import { useCallback } from 'react';
import { sporranState } from '@/app/layout';
import { useHookstate } from '@hookstate/core';
import * as Kilt from '@kiltprotocol/sdk-js';
import axios from 'axios';

import { sessionHeader } from '@/common/constants';

const Verify = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

  const requestPresentation = useCallback(async () => {
    if (!session) return;

    const { sessionId } = session || { sessionId: null };
    const headers = { [sessionHeader]: sessionId };

    const {
      data: { encryptedMessage },
    } = await axios.get('/api/verify/presentation', {
      headers,
    });

    await session.send(encryptedMessage);

    await session.listen(async (message: Kilt.IEncryptedMessage) => {
      const { data } = await axios.post(
        '/api/verify/presentation',
        { message },
        {
          headers,
        },
      );

      console.log('RESULT::', data);
      if (data?.attester) alert('Verification successful!.');
    });
  }, [session]);

  return (
    <div>
      <button onClick={requestPresentation}>Request Presentation</button>
    </div>
  );
};

export default Verify;
