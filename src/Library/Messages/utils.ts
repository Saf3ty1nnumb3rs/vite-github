import { MessageEnKey, messagesEn } from './MessagesEn';
import { messagesEs } from './MessagesEs';

export type TranslatableMessageKey = MessageEnKey;

export const messages = {
  en: messagesEn as Record<MessageEnKey, string>,
  es: messagesEs as Record<MessageEnKey, string>,
};
