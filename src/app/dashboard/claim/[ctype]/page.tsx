'use client';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useParams, useRouter } from 'next/navigation';

import Claim from '@/app/components/Claim';
import TabsNav from '@/app/components/TabsNav';

const tabs = {
  ine: 0,
  curp: 1,
  mobile: 2,
};

const claimNav = [
  { title: 'INE', path: '/ine' },
  { title: 'CURP', path: '/curp' },
  { title: 'Telefono celular', path: '/mobile', disabled: true },
  { title: 'Carta de antecedentes', path: '/ncrl', disabled: true },
  { title: 'Licencia de conducir', path: '/driver_license', disabled: true },
  { title: 'Expediente Médico', path: '/medical_background', disabled: true },
];

// https://attesting-dapp.vercel.app/?process_id=IDP9059ef45802e673e4625a04cdf65d6bc&account_id=ACCf563223b5b5bbde84a1223c84c80a670

const Dashboard = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <TabsNav defaultIndex={2}>
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
