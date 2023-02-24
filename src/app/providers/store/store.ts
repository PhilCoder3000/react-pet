import { configureStore } from '@reduxjs/toolkit';
import { userAuthReducer } from 'entities/user';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer
  },
});
