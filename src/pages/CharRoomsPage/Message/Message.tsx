import { ChatMessage } from 'entities/chat/types';
import { memo } from 'react';
import classes from './Message.module.scss';

type MessageProps = ChatMessage

export const Message = memo(({ authorName, text, timestamp }: MessageProps) => (
  <div className={classes.container}>
    <div className={classes.text}>
      <p>{text}</p>
    </div>
    <div className={classes.info}>
      <p>{authorName}</p>
      <p>{timestamp}</p>
    </div>
  </div>
));
