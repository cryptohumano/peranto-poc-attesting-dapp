'use client';

import { sporranState } from '@/app/layout';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';

const Legal = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

  if (!session) return <Text>Connect with Sporran</Text>;

  return (
    <>
      <Modal isOpen onClose={() => null} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>
            <iframe
              width="100%"
              style={{ height: '100vh' }}
              src="https://multisign.vercel.app/"
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Legal;
