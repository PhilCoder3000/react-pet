import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import { OpenSnackBarPayload, SnackBarState } from './types';

const initialState: SnackBarState = {
  isOpen: false,
  color: 'error',
  message: '',
};

export const snackBarSlice = createSlice({
  name: 'snackBarSlice',
  initialState,
  reducers: {
    openSnackBar: (state, { payload }: PayloadAction<OpenSnackBarPayload>) => {
      const { message, color } = payload;
      state.isOpen = true;
      state.message = message;
      state.color = color || state.color;
    },
    closeSnackBar: (state) => {
      state.isOpen = false;
      state.color = 'error';
    },
  },
});

const { actions, reducer: snackBarReducer } = snackBarSlice;
export const { openSnackBar, closeSnackBar } = actions;
export const selectSnackBar = (state: RootState) => state.snackBar;
export { snackBarReducer };
