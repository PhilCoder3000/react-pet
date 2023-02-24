import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import type { UserInfo } from 'firebase/auth';

export interface UserAuth {
  isPending: boolean;
  isError: boolean;
  isAuth: boolean;
  userInfo: UserInfo | null;
}

const initialState: UserAuth = {
  isPending: false,
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
});

const { actions, reducer: userAuthReducer } = userAuth;

export const { setPending, setError, setUserInfo, logOut } = actions;
export const selectUserAuth = (state: RootState) => state.userAuth;
export { userAuthReducer };
