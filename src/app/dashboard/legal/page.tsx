'use client';

import TabsNav from '@/app/components/TabsNav';
import { sporranState } from '@/app/layout';
import { firestore, sendChatMsg, storage } from '@/common/utilities/firebase';
import {
  Button,
  Divider,
  Flex,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { collection, getDocs } from 'firebase/firestore';
import { listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import { W3N } from '@/app/components/W3N';

type Multisign = {
  id: string;
  signers: { did: string; email: string }[];
  creatorDid: string;
  contractName: string;
  sendContractChat: any;
};

const useGetMultisign = () => {
  const [multisigns, setMultisigns] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const r = await getDocs(collection(firestore, 'multisign'));

      const _: any[] = [];

      r.forEach((doc) => {
        _.push({ ...doc.data(), id: doc.id });
      });

      setMultisigns(_);
    };

    init();
  }, []);

  return {
    multisigns,
  } as {
    multisigns: Multisign[];
  };
};

const useGetMultisignSigns = ({ id }: { id: string }) => {
  const [signs, setSigns] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      const storageRef = ref(storage, `${id}/`);

      const { items } = await listAll(storageRef);

      setSigns(items.map((item) => item.name));
    };

    if (id) init();
  }, [id]);

  return {
    signs,
  };
};

const ListMultiSign = ({
  contractName,
  creatorDid,
  id,
  signers,
  sendContractChat,
}: Multisign) => {
  const { signs } = useGetMultisignSigns({ id });

  return (
    <Flex
      direction="column"
      border="1px dashed #ccc"
      w="full"
      minW="700px"
      maxW="800px"
      shadow="lg"
      p="4"
      rounded="md"
    >
      <Text>Contract: {contractName}</Text>
      <Text>
        Creator: <W3N ownerDid={creatorDid} />
      </Text>
      <Text>Id: {id}</Text>
      <Divider my="4" />
      <Text>Signers: </Text>
      <UnorderedList>
        {signers.length > 0 &&
          signers.map((signer, _id) => {
            const isSigned = signs
              .map((s) => s.replace('.didsign', ''))
              .includes(signer.did.replace('did:kilt:', ''));

            return (
              <ListItem key={_id} display="flex" gap={4}>
                <Text fontSize="sm">
                  <W3N ownerDid={signer.did} />
                </Text>{' '}
                -{' '}
                <Text fontSize="sm">{isSigned ? 'Signed' : 'Not signed'}</Text>{' '}
                {!isSigned && (
                  <Button
                    fontSize="sm"
                    onClick={() => sendContractChat(id, signer.did)}
                  >
                    Request sign by chat
                  </Button>
                )}
                {isSigned && (
                  <Link
                    fontSize="sm"
                    target="_blank"
                    color="blue.600"
                    fontWeight="semibold"
                    href={`https://multisign.vercel.app/verifier?multiSign=${id}&did=${signer.did.replace(
                      'did:kilt:',
                      '',
                    )}`}
                  >
                    Verify sign
                  </Link>
                )}
              </ListItem>
            );
          })}
      </UnorderedList>
    </Flex>
  );
};

const Legal = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [currentDid, setCurrentDid] = useState('');
  const { sessionId } = session || { sessionId: null };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const headers = { [sessionHeader]: sessionId };

  const { multisigns: _multisigns } = useGetMultisign();
  const multisigns = _multisigns.filter((mS) =>
    mS.creatorDid.includes(currentDid),
  );

  const onSetSenderDid = async () => {
    const thaWindow = window as any;

    const [{ did }] =
      thaWindow.meta1 === true
        ? [{ did: 'testDid' }]
        : await thaWindow.meta.provider.getDidList();

    const v = did || '';

    setCurrentDid(v.replace('did:kilt:', ''));
  };

  useEffect(() => {
    if (session) onSetSenderDid();
  }, [session]);

  const sendContractChat = async (contractId: string, recipientDid: string) => {
    const message = `https://multisign.vercel.app/signer?multiSign=${contractId}`;

    await sendChatMsg(
      message,
      currentDid,
      recipientDid.replace('did:kilt:', ''),
      headers,
    );
  };

  if (!session || !currentDid) return <Text>Connect with Sporran</Text>;

  return (
    <>
      <TabsNav defaultIndex={1}>
        <Flex
          direction="column"
          width="full"
          gap={12}
          mt="20"
          alignItems="center"
          justifyContent="center"
        >
          {multisigns.length > 0 &&
            multisigns.map((multisign, id) => {
              return (
                <ListMultiSign
                  key={id}
                  contractName={multisign.contractName}
                  creatorDid={multisign.creatorDid}
                  id={multisign.id}
                  signers={multisign.signers}
                  sendContractChat={sendContractChat}
                />
              );
            })}
        </Flex>
      </TabsNav>
    </>
  );

  // return (
  //   <>
  //     <Modal isOpen onClose={() => null} size="full">
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalBody p={0}>
  //           <iframe
  //             width="100%"
  //             style={{ height: '100vh' }}
  //             src="https://multisign.vercel.app/"
  //           ></iframe>
  //         </ModalBody>
  //       </ModalContent>
  //     </Modal>
  //   </>
  // );
};

export default Legal;
