'use client';

import { useHookstate } from '@hookstate/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useParams, useRouter } from 'next/navigation';

import { sporranState } from '../../../layout';
import Claim from '@/app/components/Claim';
import TabsNav from '@/app/components/TabsNav';

const tabs = {
  ine: 0,
  ncrl: 1,
};

const claimNav = [
  { title: 'INE', path: '/ine' },
  { title: 'Carta de antecedentes', path: '/ncrl' },
  { title: 'RFC', path: '/rfc', disabled: true },
  { title: 'CURP', path: '/curp', disabled: true },
  { title: 'Licencia de conducir', path: '/driver_license', disabled: true },
  { title: 'Expediente Médico', path: '/medical_background', disabled: true },
];

const Dashboard = () => {
  const router = useRouter();
  const params = useParams();
  const state = useHookstate(sporranState);
  const session = state.get() as { sessionId: string };

  console.log('ASD', session);

  return (
    <TabsNav defaultIndex={1}>
      <Tabs
        orientation="vertical"
        defaultIndex={tabs[params.ctype as keyof typeof tabs]}
        colorScheme="telegram"
        onChange={(i) => router.push('/dashboard/claim/' + claimNav[i].path)}
      >
        <TabList marginTop="14">
          {claimNav.map((cN) => (
            <Tab
              key={cN.path}
              mb={4}
              justifyContent="start"
              textAlign="left"
              minWidth="44"
              paddingLeft="4"
              isDisabled={cN.disabled}
            >
              {cN.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {claimNav.map((cN) => (
            <TabPanel
              key={cN.path}
              mt="14"
              bgColor="blue.50"
              borderRadius="md"
              minH="96"
              pt="12"
            >
              <Claim type={params.ctype} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </TabsNav>
  );
};

export default Dashboard;
