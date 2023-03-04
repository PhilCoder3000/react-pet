import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SignUpFormData } from '../types';

export const createUserWithEmail = createAsyncThunk<void, SignUpFormData>(
  'user/createUserWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
    } catch (error) {
      return rejectWithValue('sign up error');
    }
  },
);
