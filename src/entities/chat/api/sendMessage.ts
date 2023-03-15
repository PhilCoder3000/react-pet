import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseDB } from 'app/firebase';
import { RootState } from 'app/providers/store/types';
import { FirebaseError } from 'firebase/app';
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

export const sendMessage = createAsyncThunk<
  void,
  { roomId: string, message: string },
  { state: RootState }
>('chat/sendMessage', async ({ roomId, message }, { rejectWithValue, getState }) => {
  try {
    const { userAuth } = getState();
    if (userAuth.userInfo) {
      const { uid, displayName } = userAuth.userInfo;
      const resp = await addDoc(
        collection(firebaseDB, 'chat-rooms', roomId, 'messages'),
        {
          uid: uid,
          displayName: displayName,
          text: message,
          timestamp: serverTimestamp(),
        },
      );
      console.log('🚀 ~ file: signInUserWithEmail.ts:12 ~ resp:', resp);
    }
  } catch (error) {
    console.log('🚀 ~ file: signInUserWithEmail.ts:13 ~ error:', error);
    const { code } = error as FirebaseError;
    return rejectWithValue(code);
  }
});
