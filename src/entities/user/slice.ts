import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import { createUserWithEmail } from 'entities/user/api/createUserWithEmail';
import { signInUserWithEmail } from 'entities/user/api/signInUserWithEmail';
import type { UserInfo } from 'firebase/auth';
import { updateUserProfile } from './api/updateUserProfile';
import type { UserAuth } from './types';

const initialState: UserAuth = {
  isPending: true,
  isError: false,
  isAuth: false,
  userInfo: null,
  isPendingProfile: false,
};

export const userAuth = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPending = payload;
    },
    setError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
    },
    setUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
      state.userInfo = payload;
      state.isAuth = true;
      state.isPending = false;
    },
    setPhotoUrl: (state, {payload}: PayloadAction<string>) => {
      if (state.userInfo) {
        state.userInfo.photoURL = payload
      }
    },
    logOut: (state) => {
      state.isAuth = false;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUserWithEmail.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(createUserWithEmail.fulfilled, (state) => {
      state.isAuth = true;
      state.isPending = false;
    });
    builder.addCase(createUserWithEmail.rejected, (state) => {
      state.isError = true;
      state.isPending = false;
    });
    builder.addCase(signInUserWithEmail.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(signInUserWithEmail.fulfilled, (state) => {
      state.isAuth = true;
      state.isPending = false;
    });
    builder.addCase(signInUserWithEmail.rejected, (state) => {
      state.isError = true;
      state.isPending = false;
    });
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isPendingProfile = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
      state.isPendingProfile = false;
      if (payload && state.userInfo) {
        if (payload.displayName) {
          state.userInfo = {
            ...state.userInfo,
            displayName: payload.displayName,
          }
        }
        if (payload.photoURL) {
          state.userInfo = {
            ...state.userInfo,
            photoURL: payload.photoURL,
          }
        }
      }
    });
  },
});

const { actions, reducer: userAuthReducer } = userAuth;

export const { setPending, setError, setUserInfo, setPhotoUrl, logOut } = actions;
export const selectUserAuth = (state: RootState) => state.userAuth;
export { userAuthReducer };
