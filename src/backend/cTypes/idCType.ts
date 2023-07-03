import type { ICType } from '@kiltprotocol/sdk-js';

export const idCType: ICType = {
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  properties: {
    age: {
      type: 'integer',
    },
    name: {
      type: 'string',
    },
  },
  title: 'INE ID',
  type: 'object',
  $id: 'kilt:ctype:0xa742f2eb8ba8d939c9ccd1332511fa284c528a57b36bd33c3168b11da31a3366',
};
