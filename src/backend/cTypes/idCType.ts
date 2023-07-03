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
  $id: 'kilt:ctype:0x5820983dbb2bc4ed14e9196ec9cc572e0c8f169dbe3c62fd6f7260d8d88f4510',
};
