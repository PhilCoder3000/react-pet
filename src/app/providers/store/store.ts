import { configureStore } from '@reduxjs/toolkit';
import { userAuthReducer } from 'features/user/store/slice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer
  },
});
