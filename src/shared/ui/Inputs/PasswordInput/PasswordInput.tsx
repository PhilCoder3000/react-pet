import { memo, useState } from 'react';
import Hidden from 'shared/assets/svg/input/hidden.svg';
import Visible from 'shared/assets/svg/input/visible.svg';
import { IconButton } from 'shared/ui/IconButtons/IconButton';
import { TextInputProps, TextInput } from '../TextInput';
import classes from './PasswordInput.module.scss';

type InputType = 'text' | 'password';

type IconProps = {
  type: InputType;
  setType: (arg: InputType) => void;
};

const Icon = memo(({ type, setType }: IconProps) => (
  <IconButton
    color="secondary"
    onClick={() => setType(type === 'text' ? 'password' : 'text')}
    className={classes.button}
  >
    {type === 'text' ? <Visible /> : <Hidden />}
  </IconButton>
));

type PasswordInputProps = TextInputProps;

export const PasswordInput = memo((props: PasswordInputProps) => {
  const [type, setType] = useState<InputType>('password');
  return (
    <TextInput {...props} type={type} afterElement={<Icon type={type} setType={setType} />} />
  );
});
