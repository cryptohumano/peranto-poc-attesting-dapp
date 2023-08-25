'use client';

import { useCallback, useState } from 'react';
import { sporranState } from '@/app/layout';
import { useHookstate } from '@hookstate/core';
import * as Kilt from '@kiltprotocol/sdk-js';
import axios from 'axios';

import { sessionHeader } from '@/common/constants';
import TabsNav from '@/app/components/TabsNav';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

const Verify = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [credentialData, setCredentialData] = useState<any>();
  const [displayINE, setDisplayINE] = useState(false);

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

      setCredentialData(data?.credential);
    });
  }, [session]);

  return (
    <TabsNav defaultIndex={2}>
      <Flex
        justifyContent="center"
        p="9"
        direction="column"
        alignItems="center"
      >
        {!credentialData && (
          <Button onClick={requestPresentation} color="blue.300" maxWidth="lg">
            {session ? 'Login with Credential' : 'Connect Sporran'}
          </Button>
        )}
        {credentialData && (
          <Card>
            <CardHeader>
              <Heading size="md">Credential Data</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {credentialData?.fullname}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Date of Birth
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {credentialData?.dayofbirth}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    INE
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {displayINE
                      ? credentialData?.ineid
                      : '**********************'}
                    <Button
                      justifySelf="end"
                      colorScheme="gray"
                      onClick={() => setDisplayINE(!displayINE)}
                    >
                      {!displayINE ? 'Show' : 'Hide'}
                    </Button>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        )}
      </Flex>
    </TabsNav>
  );
};

export default Verify;
