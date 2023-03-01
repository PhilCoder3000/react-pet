import { configureStore } from '@reduxjs/toolkit';
import { snackBarReducer } from 'entities/snackBar';
import { userAuthReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    snackBar: snackBarReducer,
  },
});
