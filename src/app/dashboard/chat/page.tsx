'use client';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';
import TabsNav from '@/app/components/TabsNav';
import { Flex } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import { encryptMessageBody } from '@/common/utilities/encryptMessage';

type Message = {
  message: string;
  sender: string;
  direction: any;
}[];

const Profile = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [chat, setChat] = useState<Message>([]);

  const sendMessage = useCallback(async () => {
    if (!session) return;

    const { sessionId } = session || { sessionId: null };
    const headers = { [sessionHeader]: sessionId };

    await axios('/api/chat', { headers });
  }, [session]);

  const onSend = async (message: string) => {
    const newChat = [
      ...chat,
      {
        message,
        sender: session?.encryptionKeyUri as string,
        direction: 'outgoing',
      },
    ];

    setChat(newChat);
  };

  return (
    <TabsNav defaultIndex={4}>
      <Flex justifyContent="center" mt="14" gap="8">
        <Flex style={{ position: 'relative', height: '500px' }}>
          <MainContainer style={{ minWidth: 400 }}>
            <ChatContainer>
              <MessageList>
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: 'just now',
                    sender: 'Joe',
                    direction: 'incoming',
                    position: 'first',
                  }}
                />
                {chat.map(({ message, sender, direction }, id) => {
                  return (
                    <Message
                      key={id}
                      model={{
                        message,
                        sentTime: 'just now',
                        sender,
                        direction,
                        position: 'first',
                      }}
                    />
                  );
                })}
              </MessageList>
              <MessageInput
                onSend={onSend}
                placeholder="Type message here"
                attachButton={false}
              />
            </ChatContainer>
          </MainContainer>
        </Flex>
        {session && <button onClick={sendMessage}>LLLLLLL</button>}
      </Flex>
    </TabsNav>
  );
};

export default Profile;
