import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SignUpFormData } from '../types';

export const createUserWithEmail = createAsyncThunk<
  void,
  SignUpFormData,
  { rejectValue: string }
>(
  'user/createUserWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      const { code } = error as FirebaseError;
      return rejectWithValue(code);
    }
  },
);
