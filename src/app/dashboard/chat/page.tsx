'use client';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  MessageModel,
} from '@chatscope/chat-ui-kit-react';
import TabsNav from '@/app/components/TabsNav';
import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firestore } from '@/common/utilities/firebase';
import { useQuery } from 'react-query';

type Message = {
  message: string;
  sender: string;
  direction: any;
}[];

const sortMsg = (list: any) =>
  list.sort((a: any, b: any) => (a.timestamp < b.timestamp ? -1 : 1));

const ChatMessage = ({ msg, headers }: any) => {
  const { data: decryptedMsg } = useQuery(
    ['/msg', msg.message],
    async () => {
      const {
        data: { decryptedMessage },
      } = await axios.post(
        '/api/chat',
        {
          message: msg.message,
          decrypt: true,
        },
        { headers },
      );

      return decryptedMessage;
    },
    {
      enabled: !!msg.message,
      refetchOnWindowFocus: false,
      initialData: '',
    },
  );

  return (
    <Text w="full" textAlign={msg.align}>
      {decryptedMsg}
    </Text>
  );
};

const Profile = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });

  const [senderDid, setSenderDid] = useState('');
  const [recipientDid, setRecipienDid] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [loadSendMsg, setLoadSendMsg] = useState(false);
  const [pendingNotifications, setPendingNotifications] = useState(0);

  const { sessionId } = session || { sessionId: null };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const headers = { [sessionHeader]: sessionId };

  const { data: chat, refetch: refetchChat } = useQuery(
    ['/chat', senderDid, recipientDid],
    async () => {
      let sentMsgs = [];
      let receivedMsgs: any = [];

      const docRef = doc(firestore, 'chat', senderDid);

      const _doc = await getDoc(docRef);

      if (_doc.exists()) {
        const historical = _doc.data()[recipientDid] || [];

        sentMsgs = historical;
      }

      // const q = query(
      //   collection(firestore, 'chat'),
      //   where(senderDid, '!=', null),
      // );

      // const querySnapshot = await getDocs(q);
      // const docs: any = [];

      // querySnapshot.forEach((__doc) => {
      //   docs.push(__doc.data());
      // });

      // console.log('DOQUIS:::', docs);

      const _docRef = doc(firestore, 'chat', recipientDid);

      const __doc = await getDoc(_docRef);

      if (__doc.exists()) {
        const historical = __doc.data()[senderDid] || [];

        receivedMsgs = historical;
      }

      const historical: any = [
        ...sentMsgs.map((msg: any) => ({ ...msg, align: 'right' })),
        ...receivedMsgs.map((msg: any) => ({ ...msg, align: 'left' })),
      ];

      return sortMsg(historical);
    },
    {
      enabled: Boolean(senderDid && recipientDid),
      refetchOnWindowFocus: false,
      initialData: [],
    },
  );

  useEffect(() => {
    const init = async () => {
      const docRef = doc(firestore, 'chat', senderDid);

      onSnapshot(docRef, async () => {
        const _doc = await getDoc(docRef);

        if (_doc.exists()) {
          const _pendingNotifications = Object.keys(_doc.data()).reduce(
            (prev, curr) => {
              if (curr.includes('-Notifications')) {
                return _doc.data()[curr];
              }

              return prev;
            },
            0,
          );

          setPendingNotifications(_pendingNotifications);
        }
      });
    };

    if (senderDid) init();
  }, [senderDid]);

  useEffect(() => {
    const init = async () => {
      const docRef = doc(firestore, 'chat', recipientDid);

      onSnapshot(docRef, async () => {
        refetchChat();
      });
    };

    if (recipientDid) init();
  }, [recipientDid, refetchChat]);

  const onSend = useCallback(
    async (message: string) => {
      if (!session || !senderDid || !recipientDid) return;

      setLoadSendMsg(true);

      const { data } = await axios.post(
        '/api/chat',
        { message, senderDid, recipientDid },
        { headers },
      );

      const msg = {
        message: data?.encryptedMessage,
        timestamp: Date.now(),
        read: false,
      };

      const docRefSender = doc(firestore, 'chat', senderDid);
      const docRefRecipient = doc(firestore, 'chat', recipientDid);

      const _docSender = await getDoc(docRefSender);
      const _docRecipient = await getDoc(docRefRecipient);

      if (_docSender.exists()) {
        const recipientChat = _docSender.data()[recipientDid] || [];

        await updateDoc(docRefSender, {
          [recipientDid]: [...recipientChat, msg],
        });
      } else {
        await setDoc(docRefSender, {
          [recipientDid]: [msg],
        });
      }

      if (_docRecipient.exists()) {
        const recipientNotifications =
          _docRecipient.data()[`${senderDid}-Notifications`] || 0;

        await updateDoc(docRefRecipient, {
          [`${senderDid}-Notifications`]: recipientNotifications + 1,
        });
      } else {
        await setDoc(docRefRecipient, {
          [`${senderDid}-Notifications`]: 1,
        });
      }

      setMsgInput('');
      setLoadSendMsg(false);
      refetchChat();
    },
    [session, senderDid, recipientDid, headers, refetchChat],
  );

  const onSetSenderDid = async () => {
    const thaWindow = window as any;

    const [{ did }] =
      thaWindow.meta1 === true
        ? [{ did: 'testDid' }]
        : await thaWindow.meta.provider.getDidList();

    const v = did || '';

    setSenderDid(v.replace('did:kilt:', ''));
  };

  const onSetRecipientDid = (e: any) => {
    const v = e.target.value || '';

    setRecipienDid(v.replace('did:kilt:', ''));
  };

  return (
    <TabsNav defaultIndex={4}>
      <Flex alignItems="center" justifyContent="center" mt="14" gap="8">
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ position: 'relative', height: '700px', overflowY: 'auto' }}
        >
          <MainContainer
            style={{
              border: 'none',
              minWidth: 500,
              maxWidth: 500,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 30,
            }}
          >
            <Text fontWeight="bold">
              Pending Notifications: {pendingNotifications}
            </Text>

            {!senderDid && (
              <Button onClick={onSetSenderDid}>Connect with DID</Button>
            )}
            {senderDid && (
              <Flex direction="column" w="full" gap={2}>
                <Text>Recipient Did:</Text>
                <Input
                  placeholder="Recipient Did"
                  onChange={onSetRecipientDid}
                />
              </Flex>
            )}
            {senderDid && (
              <>
                <Flex direction="column" w="full" gap={2}>
                  <Text>Message:</Text>
                  <Input
                    placeholder="Send Message"
                    onChange={(e) => setMsgInput(e.target.value)}
                  />
                  <Button
                    onClick={() => onSend(msgInput)}
                    isLoading={loadSendMsg}
                  >
                    Send
                  </Button>
                </Flex>
              </>
            )}
            {chat.length > 0 && (
              <Flex w="full" direction="column" gap={4}>
                <Text fontWeight="bold">Chat:</Text>
                {chat.map((msg: any, k: number) => (
                  <ChatMessage key={k} msg={msg} headers={headers} />
                ))}
              </Flex>
            )}
          </MainContainer>
        </Flex>
      </Flex>
    </TabsNav>
  );
};

export default Profile;
