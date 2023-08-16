import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const mainNavMapping = [
  { title: 'Perfil', path: '/profile' },
  { title: 'Votacion', path: '/vote' },
  { title: 'Credenciales', path: '/claim/ine' },
  { title: 'Contratos', path: '/contracts', disabled: true },
  { title: 'Chat', path: '/chat', disabled: true },
  { title: 'Métodos de Pago', path: '/payments', disabled: true },
  { title: 'Historial', path: '/history', disabled: true },
];

const TabsNav = ({ defaultIndex, children }: any) => {
  const router = useRouter();

  useEffect(() => {
    const w = window as any;
    w.NProgress.done();

    return () => w.NProgress.start();
  }, []);

  return (
    <>
      <Tabs
        isFitted
        defaultIndex={defaultIndex}
        variant="soft-rounded"
        colorScheme={defaultIndex === 1 ? 'pink' : 'blue'}
        width="100%"
        onChange={(i) => router.push('/dashboard/' + mainNavMapping[i].path)}
      >
        <TabList>
          {mainNavMapping.map((m) => (
            <Tab key={m.path} isDisabled={m.disabled}>
              {m.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {mainNavMapping.map((m) => (
            <TabPanel key={m.path}>{children}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TabsNav;
