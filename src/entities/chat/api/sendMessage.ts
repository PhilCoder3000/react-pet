import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseDB } from 'app/firebase';
import { RootState } from 'app/providers/store/types';
import { FirebaseError } from 'firebase/app';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ChatMessage } from '../types';

export const sendMessage = createAsyncThunk<
  void,
  { roomId: string; text: string },
  { state: RootState }
>(
  'chat/sendMessage',
  async ({ roomId, text }, { rejectWithValue, getState }) => {
    try {
      const { userAuth } = getState();

      if (userAuth.userInfo) {
        const { uid, displayName } = userAuth.userInfo;
        const message: ChatMessage = {
          authorName: displayName || 'Anonym',
          authorUid: uid,
          text,
          timestamp: serverTimestamp(),
        };
        const resp = await addDoc(
          collection(firebaseDB, 'chat-rooms', roomId, 'messages'),
          message,
        );
        console.log('🚀 sendMessage resp:', resp);
      }
    } catch (error) {
      console.log('🚀 sendMessage error:', error);
      const { code } = error as FirebaseError;
      return rejectWithValue(code);
    }
  },
);
