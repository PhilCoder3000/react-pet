import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'app/firebase';
import { updateProfile } from 'firebase/auth';
import { Profile } from '../types';

export const updateUserProfile = createAsyncThunk<Profile | void, Profile>(
  'user/updateProfile',
  async (profile, { rejectWithValue }) => {
    try {
      const user = firebaseAuth.currentUser;
      if (user) {
        await updateProfile(user, profile);
        return profile
      }
    } catch (error) {
      rejectWithValue('update profile error');
    }
  },
);
