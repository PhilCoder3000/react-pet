import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/providers/store/types'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

const { increment, decrement } = counterSlice.actions
const { reducer: counterReducer } = counterSlice
const selectCounter = (state: RootState) => state.counter

export {
  increment,
  decrement,
  selectCounter,
  counterReducer
}