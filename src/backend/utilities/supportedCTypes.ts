import type { ICType } from '@kiltprotocol/sdk-js';

import { emailCType } from '../cTypes/emailCType';
import { twitterCType } from '../cTypes/twitterCType';
import { idCType } from '../cTypes/idCType';

export const supportedCTypeKeys = ['email', 'twitter', 'id'] as const;

export type SupportedCType = (typeof supportedCTypeKeys)[number];

export const supportedCTypes: Record<SupportedCType, ICType> = {
  email: emailCType,
  twitter: twitterCType,
  id: idCType,
};

export const kiltCost: Record<SupportedCType, number> = {
  id: 1,
  email: 2,
  twitter: 3,
};

export function isSupportedCType(cType: string): cType is SupportedCType {
  return supportedCTypeKeys.includes(cType as SupportedCType);
}
