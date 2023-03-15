import { useDispatch, useSelector } from 'app/providers/store';
import { selectChat, sendMessage } from 'entities/chat';
import { selectUserAuth } from 'entities/user';
import { useCallback } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { useForm } from 'shared/utils/useForm/useForm';
import classes from './MessageInput.module.scss';

type Message = {
  message: string;
};

interface MessageInputProps {
  roomId: string;
}

export function MessageInput({ roomId }: MessageInputProps) {
  const { isPending } = useSelector(selectChat);
  const { isAuth } = useSelector(selectUserAuth);
  const dispatch = useDispatch();

  const sendMessageHandler = useCallback(
    ({ message }: Message) => {
      dispatch(
        sendMessage({
          roomId,
          message: message,
        }),
      );
    },
    [dispatch, roomId],
  );

  const { value, changeHandler, submitHandler } = useForm<Message>(
    {
      message: '',
    },
    sendMessageHandler,
    {
      message: {
        isRequired: true,
      },
    },
  );

  if (!isAuth) {
    return null
  }

  return (
    <div className={classes.container}>
      <TextInput
        value={value.message}
        name="message"
        onChange={changeHandler}
        containerClassName={classes.input}
        variant="outlined"
      />
      <Button
        color="secondary"
        onClick={submitHandler}
        isLoading={isPending}
      >
        Send
      </Button>
    </div>
  );
}
