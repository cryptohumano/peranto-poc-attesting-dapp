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
import { Button, Flex, Input } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/common/utilities/firebase';
import { useQuery } from 'react-query';

const RECIPIENT_DID =
  'did:kilt:4qYEfZgassjFcD7WpbnXy8zA9Bupn4EPnpRf1RJSge2KAyF4';

type Message = {
  message: string;
  sender: string;
  direction: any;
}[];

const sortMsg = (list: any) =>
  list.sort((a: any, b: any) => (a.timestamp < b.timestamp ? -1 : 1));

const Profile = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [chat, setChat] = useState<MessageModel[]>([]);
  const [senderDid, setSenderDid] = useState();
  const [receiverDidInput, setReceiverDidInput] = useState<any>();
  const [recipientDid, setRecipienDid] = useState<any>();
  const [senderKey, setSenderKey] = useState<any>();
  const [receiverKey, setReceiverKey] = useState<any>();

  useEffect(() => {
    if (!recipientDid) return;

    const getChat = async () => {
      const { sessionId } = session || { sessionId: null };
      const headers = { [sessionHeader]: sessionId };

      const { data: received } = await axios.post(
        '/api/chat',
        { message: 'init', senderDid: recipientDid, recipientDid: senderDid },
        { headers },
      );

      setSenderKey(
        `${received?.encryptedRecipientDid}-${received?.encryptedSenderDid}`,
      );

      const { data: sent } = await axios.post(
        '/api/chat',
        { message: 'init', senderDid: recipientDid, recipientDid: senderDid },
        { headers },
      );

      setReceiverKey(
        `${sent?.encryptedSenderDid}-${sent?.encryptedRecipientDid}`,
      );
    };

    getChat();
  }, [chat, recipientDid, senderDid, session]);

  const { data: historycal, refetch } = useQuery<MessageModel[]>(
    [],
    async () => {
      const { sessionId } = session || { sessionId: null };
      const headers = { [sessionHeader]: sessionId };

      const _docReceived = await getDoc(doc(firestore, 'chat', senderKey));

      const { data: receivedMessages } = await axios.post(
        '/api/chat',
        {
          messages: _docReceived.data()?.chat || [],
          decrypt: true,
        },
        { headers },
      );

      const _docSent = await getDoc(doc(firestore, 'chat', receiverKey));

      const { data: sentMessages } = await axios.post(
        '/api/chat',
        {
          messages: _docSent.data()?.chat || [],
          decrypt: true,
        },
        { headers },
      );

      const _newChat = [
        ...sentMessages.encryptedMessages.map((msg: any) => {
          return {
            message: msg.message,
            sender: senderDid,
            direction: 'incoming',
            timestamp: msg.timestamp,
          };
        }),
        ...receivedMessages.encryptedMessages.map((msg: any) => {
          return {
            message: msg.message,
            sender: recipientDid as string,
            direction: 'outcoming',
            timestamp: msg.timestamp,
          };
        }),
      ];

      return sortMsg(_newChat);
    },
    {
      enabled: Boolean(senderKey && receiverKey && session),
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (!receiverKey) return;

    onSnapshot(doc(firestore, 'chat', receiverKey), async (doc) => {
      if ((doc.data() as any).chat.length === 1) return;

      refetch();
    });
  }, [receiverKey, refetch]);

  const onSend = useCallback(
    async (message: string) => {
      if (!session || !senderDid) return;

      const { sessionId } = session || { sessionId: null };
      const headers = { [sessionHeader]: sessionId };

      const { data } = await axios.post(
        '/api/chat',
        { message, senderDid, recipientDid },
        { headers },
      );

      const _doc = await getDoc(doc(firestore, 'chat', senderKey));

      const msg = {
        message: data?.encryptedMessage,
        timestamp: Date.now(),
      };

      await setDoc(doc(firestore, 'chat', senderKey), {
        chat: _doc.exists() ? [...(_doc.data().chat || []), msg] : [msg],
      });

      refetch();
    },
    [session, senderDid, recipientDid, senderKey, refetch],
  );

  const onConnectDid = async () => {
    const [{ did }] = await (window as any).meta.provider.getDidList();

    setSenderDid(did);
  };

  return (
    <TabsNav defaultIndex={4}>
      <Flex justifyContent="center" mt="14" gap="8">
        <Flex style={{ position: 'relative', height: '500px' }}>
          <MainContainer
            style={{ minWidth: 400, display: 'flex', justifyContent: 'center' }}
          >
            {!senderDid && (
              <Button onClick={onConnectDid}>Connect with DID</Button>
            )}
            {senderDid && !recipientDid && (
              <Flex direction="column" mt="2.5" gap={2}>
                <Input
                  placeholder="Receiver DID"
                  defaultValue={receiverDidInput}
                  onChange={(e) => setReceiverDidInput(e.target.value)}
                />
                <Button onClick={() => setRecipienDid(receiverDidInput)}>
                  Set Receiver DID
                </Button>
              </Flex>
            )}
            {senderDid && recipientDid && (
              <ChatContainer>
                <ConversationHeader>
                  <ConversationHeader.Back />
                  <ConversationHeader.Content
                    userName={`${recipientDid?.slice(0, 20) + '...'}`}
                    info="Active 10 mins ago"
                  />
                </ConversationHeader>
                <MessageList>
                  {historycal?.map(({ message, sender, direction }, id) => {
                    return (
                      <Message
                        key={id}
                        model={{
                          message,
                          sentTime: 'just now',
                          sender,
                          direction,
                          position: 'single',
                        }}
                      />
                    );
                  })}
                </MessageList>
                <MessageInput
                  disabled={!session}
                  onSend={onSend}
                  placeholder={
                    !session ? 'Connect Sporran' : 'Type message here'
                  }
                  attachButton={false}
                />
              </ChatContainer>
            )}
          </MainContainer>
        </Flex>
      </Flex>
    </TabsNav>
  );
};

export default Profile;
