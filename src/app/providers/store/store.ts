import { configureStore } from '@reduxjs/toolkit';
import { userAuthReducer } from 'features/user/store/slice';
import { counterReducer } from '../../../features/Counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userAuth: userAuthReducer
  },
});
