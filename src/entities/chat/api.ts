import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChatMessage } from './types';

export type Channel = 'redux' | 'general';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getMessages: build.query<ChatMessage[], Channel>({
      query: (channel) => `messages/${channel}`,
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved },
      ) {
        await cacheDataLoaded;
        try {
        //   const unsubscribe = onSnapshot(doc(firebaseDB, "chat-rooms", "dogs", "messages"), (doc) => {
        //     console.log("Current data: ", doc.data());
        // });
          await cacheEntryRemoved;
          // unsubscribe();
        } catch (error) {
          console.log('🚀 ~ file: signInUserWithEmail.ts:13 ~ error:', error);
          // const { code } = error as FirebaseError;
        }
      },
    }),
  }),
});

export const {
  reducer: chatApiReducer,
  reducerPath: chatApiReducerPath,
  middleware: chatApiMiddleware,
} = chatApi;
export const { useGetMessagesQuery } = chatApi;
