import { firebaseDB } from 'app/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export function subscribeToMessages(roomId: string, callback: (str: { id: string; }[]) => void) {
  return onSnapshot(
    query(
      collection(firebaseDB, 'chat-rooms', roomId, 'messages'),
      orderBy('timestamp', 'asc'),
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    },
  );
}
