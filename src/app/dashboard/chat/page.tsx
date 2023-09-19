'use client';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from '@chatscope/chat-ui-kit-react';
import TabsNav from '@/app/components/TabsNav';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/common/utilities/firebase';

const RECIPIENT_DID =
  'did:kilt:4qYEfZgassjFcD7WpbnXy8zA9Bupn4EPnpRf1RJSge2KAyF4';

type Message = {
  message: string;
  sender: string;
  direction: any;
}[];

let flag = false;

const Profile = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [chat, setChat] = useState<Message>([]);
  const [senderDid, setSenderDid] = useState();
  const [receiverDidInput, setReceiverDidInput] = useState<any>();
  const [recipientDid, setRecipienDid] = useState<any>();

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

      const _docReceived = await getDoc(
        doc(
          firestore,
          'chat',
          `${received?.encryptedRecipientDid}-${received?.encryptedSenderDid}`,
        ),
      );

      const { data: receivedMessages } = await axios.post(
        '/api/chat',
        {
          messages: _docReceived.data()?.chat || [],
          decrypt: true,
        },
        { headers },
      );

      const { data: sent } = await axios.post(
        '/api/chat',
        { message: 'init', senderDid: recipientDid, recipientDid: senderDid },
        { headers },
      );

      const _docSent = await getDoc(
        doc(
          firestore,
          'chat',
          `${sent?.encryptedSenderDid}-${sent?.encryptedRecipientDid}`,
        ),
      );

      const { data: sentMessages } = await axios.post(
        '/api/chat',
        {
          messages: _docSent.data()?.chat || [],
          decrypt: true,
        },
        { headers },
      );

      const _newChat = [
        ...sentMessages.encryptedMessages.map((msg: string) => {
          return {
            message: msg,
            sender: senderDid,
            direction: 'outgoing',
          };
        }),
        ...receivedMessages.encryptedMessages.map((msg: string) => {
          return {
            message: msg,
            sender: recipientDid as string,
            direction: 'incoming',
          };
        }),
      ];

      setChat(_newChat);

      flag = true;
    };

    if (flag === false) getChat();

    if (flag === true)
      setInterval(() => {
        getChat();
      }, 1000 * 15);
  }, [chat, recipientDid, senderDid, session]);

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

      const _doc = await getDoc(
        doc(
          firestore,
          'chat',
          `${data?.encryptedSenderDid}-${data?.encryptedRecipientDid}`,
        ),
      );

      await setDoc(
        doc(
          firestore,
          'chat',
          `${data?.encryptedSenderDid}-${data?.encryptedRecipientDid}`,
        ),
        {
          chat: _doc.exists()
            ? [...(_doc.data().chat || []), data?.encryptedMessage]
            : [data?.encryptedMessage],
        },
      );

      const _newChat = [
        ...chat,
        {
          message,
          sender: senderDid as string,
          direction: 'outgoing',
        },
      ];

      setChat(_newChat);
    },
    [chat, session, senderDid, recipientDid],
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
              <>
                <Input
                  placeholder="Receiver DID"
                  defaultValue={receiverDidInput}
                  onChange={(e) => setReceiverDidInput(e.target.value)}
                />
                <Button onClick={() => setRecipienDid(receiverDidInput)}>
                  Set Receiver DID
                </Button>
              </>
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
                  {chat.map(({ message, sender, direction }, id) => {
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
