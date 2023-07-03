import type { ICType } from '@kiltprotocol/sdk-js';

export const idCType: ICType = {
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  properties: {
    age: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  },
  title: 'INE ID',
  type: 'object',
  $id: 'kilt:ctype:0x1cb3b0074246693da6107dfd91d831f10896ae5027538cb6fc8d46e76b676756',
};
