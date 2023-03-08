import { firebaseDB } from 'app/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { PostDataType } from '../types';

export const getAllPosts = async () => {
  const result: PostDataType[] = [];
  const q = query(collection(firebaseDB, 'posts'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    result.push(doc.data() as PostDataType);
  });
  return result;
};
