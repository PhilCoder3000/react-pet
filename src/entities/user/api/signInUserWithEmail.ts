import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignInFormData } from '../types';

export const signInUserWithEmail = createAsyncThunk<void, SignInFormData, { rejectValue: string }>(
  'user/signInUserWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log('🚀 ~ file: signInUserWithEmail.ts:12 ~ resp:', resp);
    } catch (error) {
      console.log('🚀 ~ file: signInUserWithEmail.ts:13 ~ error:', error);
      const { code } = error as FirebaseError;
      return rejectWithValue(code)
    }
  },
);
