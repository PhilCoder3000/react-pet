import { MessageInput } from '../MessageInput/MessageInput';
import classes from './RoomField.module.scss';

export function RoomField() {
  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        <p>message</p>
      </div>
      <MessageInput roomId='dogs' />
    </div>
  );
}
