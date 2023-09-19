'use client';

import TabsNav from '@/app/components/TabsNav';
import { sporranState } from '@/app/layout';
import { sessionHeader } from '@/common/constants';
import { apiWindow, dAppName, getSession } from '@/common/utilities/session';
import {
  Avatar,
  Button,
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  WrapItem,
} from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [balance, setBalance] = useState();
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

  useEffect(() => {
    if (!session) return;

    const headers = { [sessionHeader]: session?.sessionId };

    const getDid = async () => {
      const enabled = await (window as any).injectedWeb3.Sporran.enable(
        dAppName,
      );
      const accounts = await enabled.accounts.get();
      const currentAccount = accounts[0];

      const { data } = await axios.get(
        '/api/did?q=' + encodeURIComponent(currentAccount.address),
        { headers },
      );

      setBalance(data.balance);
    };

    getDid();
  }, [session]);

  return (
    <TabsNav defaultIndex={0}>
      <Flex justifyContent="center" mt="14" gap="8">
        <Flex>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{' '}
          </WrapItem>

          <Flex>
            <Button>HA</Button>
          </Flex>
        </Flex>
        <Flex
          backgroundColor="gray.100"
          borderRadius="sm"
          p="5"
          direction="column"
          gap="8"
          minW="2xl"
        >
          <StatGroup alignSelf="end" gap="16" mr="16">
            <Stat>
              <StatLabel>Kilt Coins</StatLabel>
              <StatNumber>{balance}</StatNumber>
            </Stat>

            <Stat minW="44">
              <StatLabel>Confianza Ciudadana</StatLabel>
              <StatNumber>4/5</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                30%
              </StatHelpText>
            </Stat>
          </StatGroup>

          <TableContainer>
            <Table variant="striped" colorScheme="linkedin">
              <Thead>
                <Tr>
                  <Th>Credencial</Th>
                  <Th>Fecha Emisión</Th>
                  <Th isNumeric>Puntaje</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontWeight="bold">INE</Td>
                  <Td>8 Julio 2023</Td>
                  <Td isNumeric>99</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">RFC</Td>
                  <Td>8 Julio 2023</Td>
                  <Td isNumeric>99</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold">CURP</Td>
                  <Td>8 Julio 2023</Td>
                  <Td isNumeric>99</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </TabsNav>
  );
};

export default Profile;
