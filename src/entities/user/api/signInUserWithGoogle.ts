import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const signInUserWithGoogle = createAsyncThunk(
  'user/signInUserWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const resp = await signInWithPopup(firebaseAuth, provider);
      console.log('🚀 signInUserWithGoogle ~ resp:', resp);
    } catch (error) {
      console.log('🚀 signInUserWithGoogle ~ error:', error);
      const { code } = error as FirebaseError;
      return rejectWithValue(code)
    }
  },
)
