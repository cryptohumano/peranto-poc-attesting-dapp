import type {
  DidResourceUri,
  IEncryptedMessage,
  IMessage,
  MessageBody,
} from '@kiltprotocol/sdk-js';
import { Did, Message } from '@kiltprotocol/sdk-js';

import { encrypt, decrypt } from './cryptoCallbacks';
import { configuration } from './configuration';

export async function encryptMessageBody(
  encryptionKeyUri: DidResourceUri,
  messageBody: MessageBody,
): Promise<IEncryptedMessage> {
  const { did } = Did.parse(encryptionKeyUri);

  const message = Message.fromBody(messageBody, configuration.did, did);

  return Message.encrypt(message, encrypt, encryptionKeyUri);
}

export async function decryptMessageBody(
  encryptedMessage: IEncryptedMessage,
): Promise<IMessage> {
  return Message.decrypt(encryptedMessage, decrypt);
}
