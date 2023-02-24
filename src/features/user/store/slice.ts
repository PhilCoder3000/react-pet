import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import type { UserInfo } from 'firebase/auth';
import { createUserWithEmail } from '../NavBarAuth/api/createUserWithEmail';
import { signInUserWithEmail } from '../NavBarAuth/api/signInUserWithEmail';

export interface UserAuth {
  isPending: boolean;
  isError: boolean;
  isAuth: boolean;
  userInfo: UserInfo | null;
}

const initialState: UserAuth = {
  isPending: true,
  isError: false,
  isAuth: false,
  userInfo: null,
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
    logOut: (state) => {
      state.isAuth = false;
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
  },
});

const { actions, reducer: userAuthReducer } = userAuth;

export const { setPending, setError, setUserInfo, logOut } = actions;
export const selectUserAuth = (state: RootState) => state.userAuth;
export { userAuthReducer };
