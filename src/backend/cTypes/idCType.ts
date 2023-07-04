import type { ICType } from '@kiltprotocol/sdk-js';

export const idCType: ICType = {
  $schema: 'http://kilt-protocol.org/draft-01/ctype#',
  properties: {
    email: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
  },
  title: 'Authorization',
  type: 'object',
  $id: 'kilt:ctype:0xdf952230c87e7fbdc8503a394540c8e99029180611e7107c4eee33f67f57aa57',
};
