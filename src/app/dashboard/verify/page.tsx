'use client';

import { sporranState } from '@/app/layout';
import { useHookstate } from '@hookstate/core';

const Verify = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  console.log('METAMTEA:::', session);

  if (session) {
    (window as any).meta = session;
  }

  return null;
};

export default Verify;
