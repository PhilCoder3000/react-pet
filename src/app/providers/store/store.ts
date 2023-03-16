import { configureStore } from '@reduxjs/toolkit';
import { chatReducer, chatApiReducer, chatApiReducerPath, chatApiMiddleware } from 'entities/chat';
import { snackBarReducer } from 'entities/snackBar';
import { userAuthReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    snackBar: snackBarReducer,
    chat: chatReducer,
    [chatApiReducerPath]: chatApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApiMiddleware),
});
