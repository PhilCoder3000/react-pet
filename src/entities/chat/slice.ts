import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store/types';
import { sendMessage } from './api/sendMessage';
import { ChatStore } from './types';

const initialState: ChatStore = {
  isPending: false,
  rooms: []
};

export const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sendMessage.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.isPending = false;
    });
  },
});

const { reducer: chatReducer } = chatSlice;
// export const {} = actions
export const selectChat = (state: RootState) => state.chat;
export { chatReducer };
