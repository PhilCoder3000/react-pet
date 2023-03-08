import { firebaseDB } from 'app/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getRandomString } from 'shared/utils/crypt/getRandomString';
import { NewPostDataType } from '../types';

export const writePost = async (document: NewPostDataType) => {
  const name = getRandomString(20);
  await setDoc(doc(firebaseDB, 'posts', name), { ...document, id: name });
};
