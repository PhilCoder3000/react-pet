import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
