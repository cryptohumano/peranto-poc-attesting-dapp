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
import { Flex } from '@chakra-ui/react';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '@/app/layout';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { sessionHeader } from '@/common/constants';
import { encryptMessageBody } from '@/common/utilities/encryptMessage';

const ATTESTER_DID = process.env.NEXT_PUBLIC_DID;

type Message = {
  message: string;
  sender: string;
  direction: any;
}[];

const Profile = () => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const [chat, setChat] = useState<Message>([]);

  const onSend = useCallback(
    async (message: string) => {
      if (!session) return;

      const newChat = [
        ...chat,
        {
          message,
          sender: session?.encryptionKeyUri as string,
          direction: 'outgoing',
        },
      ];

      setChat(newChat);

      const { sessionId } = session || { sessionId: null };
      const headers = { [sessionHeader]: sessionId };

      const { data } = await axios.post('/api/chat', { message }, { headers });

      const _newChat = [
        ...newChat,
        {
          message: data.message,
          sender: session?.encryptionKeyUri as string,
          direction: 'incoming',
        },
      ];

      setChat(_newChat);
    },
    [chat, session],
  );

  return (
    <TabsNav defaultIndex={4}>
      <Flex justifyContent="center" mt="14" gap="8">
        <Flex style={{ position: 'relative', height: '500px' }}>
          <MainContainer style={{ minWidth: 400 }}>
            <ChatContainer>
              <ConversationHeader>
                <ConversationHeader.Back />
                <ConversationHeader.Content
                  userName={`Peranto Attester (${
                    ATTESTER_DID?.slice(0, 20) + '...'
                  })`}
                  info="Active 10 mins ago"
                />
              </ConversationHeader>
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
                        position: 'single',
                      }}
                    />
                  );
                })}
              </MessageList>
              <MessageInput
                disabled={!session}
                onSend={onSend}
                placeholder={!session ? 'Connect Sporran' : 'Type message here'}
                attachButton={false}
              />
            </ChatContainer>
          </MainContainer>
        </Flex>
      </Flex>
    </TabsNav>
  );
};

export default Profile;
