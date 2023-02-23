import { useState } from 'react';
import Hidden from 'shared/assets/svg/input/hidden.svg';
import Visible from 'shared/assets/svg/input/visible.svg';
import { IconButton } from 'shared/ui/IconButtons/IconButton';
import { TextInput, TextInputProps } from '../Textinput';
import classes from './PasswordInput.module.scss';

type InputType = 'text' | 'password';

type PasswordInputProps = TextInputProps;

export function PasswordInput(props: PasswordInputProps) {
  const [type, setType] = useState<InputType>('password');
  return (
    <TextInput
      {...props}
      type={type}
      afterElement={
        <IconButton
          color="secondary"
          onClick={() =>
            setType((prev) => (prev === 'text' ? 'password' : 'text'))
          }
          className={classes.button}
        >
          {type === 'text' ? <Visible /> : <Hidden />}
        </IconButton>
      }
    />
  );
}
