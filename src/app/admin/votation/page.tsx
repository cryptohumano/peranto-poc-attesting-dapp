'use client';

import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import _ReactJson from 'react-json-view';
import { Box, Button } from '@chakra-ui/react';
import ky from 'ky';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import { sessionHeader } from '@/common/constants';

const ReactJson = React.lazy(() => import('react-json-view'));

export default function Votation() {
  const [votation, setvotation] = useState<any>(null);
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const headers = { [sessionHeader]: session?.sessionId };

  useEffect(() => {
    const init = async () => {
      if (votation) return;

      const r = await ky.get(`/api/vote`, { headers }).json();

      setTimeout(() => {
        setvotation(r);
      }, 1000);
    };

    if (session?.sessionId) init();
  }, [headers, session?.sessionId, votation]);

  if (votation)
    return (
      <>
        <section className="max-w-full overflow-x-auto p-4 border">
          <ReactJson src={votation} />
        </section>
      </>
    );

  return (
    <section className="max-w-full overflow-x-auto p-4 border">
      <p>...</p>
    </section>
  );
}
