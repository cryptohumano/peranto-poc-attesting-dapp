'use client';

import { useCallback } from 'react';
import { sporranState } from '@/app/layout';
import { useHookstate } from '@hookstate/core';
import * as Kilt from '@kiltprotocol/sdk-js';
import axios from 'axios';

import { sessionHeader } from '@/common/constants';

const Verify = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  console.log('SESSION:::', session);

  const requestPresentation = useCallback(async () => {
    if (!session) return;

    const { sessionId } = session;
    const headers = { [sessionHeader]: sessionId };

    const {
      data: { encryptedMessage },
    } = await axios.get('/api/verify/presentation', {
      headers,
    });

    await session.send(encryptedMessage);
  }, [session]);

  return (
    <div>
      <button onClick={requestPresentation}>Request Presentation</button>
    </div>
  );
};

export default Verify;
