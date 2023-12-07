import { useQuery } from 'react-query';
import axios from 'axios';
import { useHookstate } from '@hookstate/core';
import { Text } from '@chakra-ui/react';
import { sporranState } from '../layout';
import { sessionHeader } from '@/common/constants';

export const useW3N = ({ ownerDid }: any) => {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const headers = { [sessionHeader]: session?.sessionId };

  const q = useQuery(['/did', ownerDid, 1], async () => {
    const { data } = await axios.get(`/api/did?did=${ownerDid}`, { headers });

    return data.data;
  });

  return q;
};

export function W3N({ ownerDid }: any) {
  const { data } = useW3N({ ownerDid });

  return (
    <Text
      fontWeight="bold"
      color="purple.600"
      width="300px"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {data?.web3Name || ownerDid}
    </Text>
  );
}
