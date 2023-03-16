export interface ChatStore {
  isPending: boolean;
  rooms: string[]
}

export interface ChatMessage {
  id: string;
  authorUid: string;
  authorName: string;
  text: string;
  timestamp: string;
}

