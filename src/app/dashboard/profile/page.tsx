'use client';

import TabsNav from '@/app/components/TabsNav';
import {
  Avatar,
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

const Profile = () => {
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
              <StatNumber>198</StatNumber>
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
