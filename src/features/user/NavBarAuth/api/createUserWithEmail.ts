import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { SignUpFormData } from 'entities/user/signUpWithEmail/types';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
      rejectWithValue('sign up error');
    }
  },
);
