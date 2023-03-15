import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from 'entities/chat';
import { snackBarReducer } from 'entities/snackBar';
import { userAuthReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    snackBar: snackBarReducer,
    chat: chatReducer,
  },
});
