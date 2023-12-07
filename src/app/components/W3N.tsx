import { useQuery } from 'react-query';
import axios from 'axios';
import { useHookstate } from '@hookstate/core';
import { sporranState } from '../layout';
import { sessionHeader } from '@/common/constants';

export function W3N({ ownerDid }: any) {
  const state = useHookstate(sporranState);
  const session = state.get({ noproxy: true });
  const headers = { [sessionHeader]: session?.sessionId };

  const { data } = useQuery(['/did', ownerDid, 1], async () => {
    const { data } = await axios.get(`/api/did?did=${ownerDid}`, { headers });

    return data.data;
  });

  return <>{data?.web3Name || ownerDid}</>;
}
