'use client';

import { waitReady } from '@polkadot/wasm-crypto';
import { useCallback, useState } from 'react';
import { sporranState } from '@/app/layout';
import { useHookstate } from '@hookstate/core';
import * as Kilt from '@kiltprotocol/sdk-js';
import axios from 'axios';

import { sessionHeader } from '@/common/constants';
import { Button, Flex } from '@chakra-ui/react';
import TabsNav from '@/app/components/TabsNav';

import marcelo from '../../marcelo.png';
import xochitl from '../../xochitl.png';

const Verify = () => {
  const [verification, setVerification] = useState(false);
  const [voteSuccess, setVoteSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

  const requestPresentation = useCallback(async () => {
    if (!session) return;

    setLoading(true);

    try {
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

        if (data?.attester) {
          setVerification(true);
        }

        setLoading(false);
      });
    } catch {
      setLoading(false);
    }
  }, [session]);

  const vote = useCallback(
    async (candidate: number) => {
      if (!session) return;

      setLoading(true);

      try {
        const { sessionId } = session || { sessionId: null };
        const headers = { [sessionHeader]: sessionId };

        await axios.post(
          '/api/vote',
          { candidate },
          {
            headers,
          },
        );

        setLoading(false);
      } catch {
        setLoading(false);
      }
    },
    [session],
  );

  const submit = async (candidate: number) => {
    if (!verification) await requestPresentation();

    if (verification) await vote(candidate);
  };

  return (
    <TabsNav defaultIndex={1}>
      <Flex alignContent="center" mt="14" gap="8" justifyContent="center">
        <Flex direction="column" gap="4">
          <Flex fontWeight="bold">Presidencia de la República Mexicana</Flex>

          <Flex backgroundColor="pink.100" gap="4" borderRadius="md" p="4">
            <Flex>
              <img className="w-[64px] h-[64px]" src={marcelo.src} />
            </Flex>
            <Flex direction="column">
              Candidato:
              <br />
              C. Marcelo Ebrard Casaubón
              <br />
              Cargo: Presidencia de la República Mexicana
              <br />
              <br />
              <Flex direction="column" maxW="96">
                <span className="font-bold">Proyecto de Gobierno:</span>
                Abstract:
                <br />
                <Flex textAlign="justify">
                  Este proyecto de presidencia tiene como objetivo fundamental
                  transformar México en un país sostenible, equitativo y
                  próspero para todos sus ciudadanos. A través de una serie de
                  puntos estratégicos de acción, se busca abordar los desafíos
                  actuales que enfrenta la nación, desde la seguridad y la
                  economía hasta la educación y el medio ambiente. Al
                  implementar políticas y medidas con visión de largo plazo, se
                  espera lograr un México donde prevalezca el desarrollo
                  integral, la justicia social y la participación ciudadana
                  activa.
                </Flex>
              </Flex>
            </Flex>
            <Flex
              alignItems="center"
              backgroundColor="pink.50"
              p="4"
              borderRadius="md"
              direction="column"
              justifyContent="space-between"
            >
              <span className="font-bold">
                Partido Político y/o Coaliciones
              </span>
              <Button
                isLoading={loading}
                disabled={!session || !verification || voteSuccess}
                onClick={() => submit(0)}
                colorScheme="pink"
                backgroundColor="pink.500 !important"
                _hover={{ backgroundColor: 'pink.300 !important' }}
                borderRadius="full"
              >
                {!session && 'Connect Sporran'}
                {session && !verification && 'Verify INE'}
                {session && verification && 'Votar'}
              </Button>
            </Flex>
          </Flex>

          <Flex backgroundColor="pink.100" gap="4" borderRadius="md" p="4">
            <Flex>
              <img className="w-[64px] h-[64px]" src={xochitl.src} />
            </Flex>
            <Flex direction="column">
              Candidato:
              <br />
              C. Xochitl Gálvez
              <br />
              Cargo: Presidencia de la República Mexicana
              <br />
              <br />
              <Flex direction="column" maxW="96">
                <span className="font-bold">Proyecto de Gobierno:</span>
                Abstract:
                <br />
                <Flex textAlign="justify">
                  Este proyecto de presidencia tiene como objetivo fundamental
                  transformar México en un país sostenible, equitativo y
                  próspero para todos sus ciudadanos. A través de una serie de
                  puntos estratégicos de acción, se busca abordar los desafíos
                  actuales que enfrenta la nación, desde la seguridad y la
                  economía hasta la educación y el medio ambiente.
                </Flex>
              </Flex>
            </Flex>
            <Flex
              alignItems="center"
              backgroundColor="pink.50"
              p="4"
              borderRadius="md"
              direction="column"
              justifyContent="space-between"
            >
              <span className="font-bold">
                Partido Político y/o Coaliciones
              </span>
              <Button
                isLoading={loading}
                disabled={!session || !verification || voteSuccess}
                onClick={() => submit(1)}
                colorScheme="pink"
                backgroundColor="pink.500 !important"
                _hover={{ backgroundColor: 'pink.300 !important' }}
                borderRadius="full"
              >
                {!session && 'Connect Sporran'}
                {session && !verification && 'Verify INE'}
                {session && verification && 'Votar'}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </TabsNav>
  );
};

export default Verify;
