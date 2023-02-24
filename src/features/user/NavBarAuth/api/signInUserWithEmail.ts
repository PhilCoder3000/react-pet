import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { SignInFormData } from 'entities/user/signInWithEmail/types';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
