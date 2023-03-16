import { FieldValue } from 'firebase/firestore';

export interface ChatStore {
  isPending: boolean;
}

export interface ChatMessage {
  authorUid: string;
  authorName: string;
  text: string;
  timestamp: FieldValue;
}

