'use client';

import { useHookstate } from '@hookstate/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { sporranState } from '../../../layout';
import Claim from '@/app/components/Claim';

const tabs = {
  ine: 1,
};

const Dashboard = () => {
  const params = useParams();
  const state = useHookstate(sporranState);
  const session = state.get() as { sessionId: string };

  console.log('ASD', session);

  return (
    <Tabs
      isFitted
      defaultIndex={1}
      variant="soft-rounded"
      colorScheme="telegram"
      width="100%"
    >
      <TabList>
        <Tab>Perfil</Tab>
        <Tab>Credenciales</Tab>
        <Tab>Contratos</Tab>
        <Tab>Chat</Tab>
        <Tab>Permuta</Tab>
        <Tab>Métodos de Pago</Tab>
        <Tab>Historial</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <Tabs
            orientation="vertical"
            defaultIndex={tabs[params.ctype as keyof typeof tabs]}
            variant="unstyled"
            colorScheme="telegram"
          >
            <TabList marginTop="14">
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Perfil
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Credenciales
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Contratos
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Chat
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Permuta
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Métodos de Pago
              </Tab>
              <Tab mb={4} justifyContent="start" minWidth="44" paddingLeft="0">
                Historial
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel pt="14">
                <Claim type={params.ctype} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Dashboard;
