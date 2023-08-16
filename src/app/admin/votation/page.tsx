'use client';

import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ReactJson from 'react-json-view';
import { Box, Button } from '@chakra-ui/react';
import ky from 'ky';

export default function Votation() {
  const [votation, setvotation] = useState({});

  useEffect(() => {
    const init = async () => {
      setvotation(await ky.get(`/api/vote`).json());
    };

    init();
  }, []);

  if (!votation)
    return (
      <section className="max-w-full overflow-x-auto p-4 border">
        <p>...</p>
      </section>
    );

  return (
    <>
      <section className="max-w-full overflow-x-auto p-4 border">
        <ReactJson src={votation} />
      </section>
    </>
  );
}
