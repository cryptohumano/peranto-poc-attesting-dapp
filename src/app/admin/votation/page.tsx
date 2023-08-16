'use client';

import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import _ReactJson from 'react-json-view';
import { Box, Button } from '@chakra-ui/react';
import ky from 'ky';

const ReactJson = React.lazy(() => import('react-json-view'));

export default function Votation() {
  const [votation, setvotation] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      const r = await ky.get(`/api/vote`).json();

      setTimeout(() => {
        setvotation(r);
      }, 1000);
    };

    if (
      typeof window !== 'undefined' &&
      typeof window?.document !== 'undefined'
    )
      init();
  }, []);

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
