import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignInFormData } from '../types';

export const signInUserWithEmail = createAsyncThunk<void, SignInFormData>(
  'user/signInUserWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
    } catch (error) {
      rejectWithValue('sign in error');
    }
  },
);
