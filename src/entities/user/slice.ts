import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import { createUserWithEmail } from 'entities/user/api/createUserWithEmail';
import { signInUserWithEmail } from 'entities/user/api/signInUserWithEmail';
import type { UserInfo } from 'firebase/auth';
import { signInUserWithGoogle } from './api/signInUserWithGoogle';
import { updateUserProfile } from './api/updateUserProfile';
import type { UserAuth } from './types';
import { signInErrorsMapper } from './utils/signInErrorsMappers';

const initialState: UserAuth = {
  isAuth: false,
  isError: false,
  errors: {},
  isPendingAuth: true,
  isPendingProfile: false,
  userInfo: null,
};

export const userAuth = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPendingAuth = payload;
    },
    setUserInfo: (state, { payload }: PayloadAction<UserInfo>) => {
      state.userInfo = payload;
      state.isAuth = true;
      state.isPendingAuth = false;
    },
    setPhotoUrl: (state, { payload }: PayloadAction<string>) => {
      if (state.userInfo) {
        state.userInfo.photoURL = payload;
      }
    },
    logOut: (state) => {
      state.isAuth = false;
      state.userInfo = null;
    },
    deleteError: (state, { payload }: PayloadAction<string>) => {
      delete state.errors[payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(createUserWithEmail.pending, (state) => {
      state.isPendingAuth = true;
    });
    builder.addCase(createUserWithEmail.fulfilled, (state) => {
      state.isAuth = true;
      state.isPendingAuth = false;
    });
    builder.addCase(createUserWithEmail.rejected, (state, { payload }) => {
      state.isPendingAuth = false;
      state.isError = true;
      state.errors = signInErrorsMapper(payload);
    });
    builder.addCase(signInUserWithEmail.pending, (state) => {
      state.isPendingAuth = true;
    });
    builder.addCase(signInUserWithEmail.fulfilled, (state) => {
      state.isAuth = true;
      state.isPendingAuth = false;
    });
    builder.addCase(signInUserWithEmail.rejected, (state, { payload }) => {
      state.isPendingAuth = false;
      state.isError = true;
      state.errors = signInErrorsMapper(payload);
    });
    builder.addCase(signInUserWithGoogle.pending, (state) => {
      state.isPendingAuth = true;
    });
    builder.addCase(signInUserWithGoogle.fulfilled, (state) => {
      state.isAuth = true;
      state.isPendingAuth = false;
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
          };
        }
        if (payload.photoURL) {
          state.userInfo = {
            ...state.userInfo,
            photoURL: payload.photoURL,
          };
        }
      }
    });
  },
});

const { actions, reducer: userAuthReducer } = userAuth;
export { userAuthReducer };

export const { setPending, setUserInfo, setPhotoUrl, logOut, deleteError } =
  actions;
export const selectUserAuth = (state: RootState) => state.userAuth;
