import { subscribeToMessages } from 'entities/chat/api/subscribeToMessages';
import { ChatMessage } from 'entities/chat/types';
import { useEffect, useState } from 'react';
import { Message } from '../Message/Message';
import { MessageInput } from '../MessageInput/MessageInput';
import classes from './RoomField.module.scss';

interface RoomFieldProps {
  roomId: string;
}

export function RoomField({ roomId }: RoomFieldProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  console.log('🚀 ~ file: RoomField.tsx:13 ~ RoomField ~ messages:', messages);

  useEffect(() => {
    const unsubscribe = subscribeToMessages(roomId, setMessages);
    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
      <MessageInput roomId="dogs" />
    </div>
  );
}
