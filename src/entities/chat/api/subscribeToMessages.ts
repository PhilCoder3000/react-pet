import { firebaseDB } from 'app/firebase';
import { format } from 'date-fns';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { ChatMessage } from '../types';

interface FetchMessage {
  authorUid: string;
  authorName: string;
  text: string;
  timestamp?: { seconds: number; nanoseconds: number };
}

export function subscribeToMessages(
  roomId: string,
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>,
) {
  const q = query(
    collection(firebaseDB, 'chat-rooms', roomId, 'messages'),
    orderBy('timestamp', 'asc'),
    limit(20),
  );
  return onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const data = change.doc.data() as FetchMessage
        let timestamp = new Date()
        if (data.timestamp?.seconds && data.timestamp?.nanoseconds) {
          timestamp = new Timestamp(data.timestamp.seconds, data.timestamp.nanoseconds).toDate()
        }
        const msg: ChatMessage = {
          ...data,
          id: change.doc.id,
          timestamp: format(timestamp, 'HH:mm')
        }

        setMessages((prev) => prev.concat(msg));
      }
      if (change.type === 'modified') {
        console.log('Modified city: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed city: ', change.doc.data());
      }
    });
  });
}
