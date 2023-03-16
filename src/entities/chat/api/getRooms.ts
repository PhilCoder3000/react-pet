import { firebaseDB } from 'app/firebase';
import { query, collection, getDocs } from 'firebase/firestore';

export async function getRooms() {
  const q = query(collection(firebaseDB, 'chat-rooms'));
  const querySnapshot = await getDocs(q);
  const rooms: string[] = []
  querySnapshot.forEach((doc) => {
    rooms.push(doc.id)
  });
  return rooms
}
