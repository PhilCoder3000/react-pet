import { subscribeToMessages } from 'entities/chat/api/subscribeToMessages';
import { useEffect } from 'react';
import { MessageInput } from '../MessageInput/MessageInput';
import classes from './RoomField.module.scss';

export function RoomField() {
  useEffect(() => {
    const unsubscribe = subscribeToMessages('dogs', (arg) => {
      console.log(arg);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        <p>message</p>
      </div>
      <MessageInput roomId="dogs" />
    </div>
  );
}
