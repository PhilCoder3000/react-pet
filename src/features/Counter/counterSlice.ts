import { createSlice } from '@reduxjs/toolkit';

export interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1;
    },
    dec: (state) => {
      state.count = state.count - 1;
    },
  },
});

const { actions, reducer: counterReducer } = counterSlice;
export const { inc, dec } = actions;
export { counterReducer };
