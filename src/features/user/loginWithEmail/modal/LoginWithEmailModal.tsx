import { Button } from 'shared/ui/Buttons/Button';
import { PasswordInput } from 'shared/ui/Inputs/PasswordInput';
import { TextInput } from 'shared/ui/Inputs/Textinput';
import { Modal } from 'shared/ui/Modals/Modal';
import { useForm } from 'shared/utils/useForm/useForm';
import { useLoginWithEmail } from '../api/useLoginWIthEmail';
import { LoginFormData } from '../types';
import classes from './LoginWithEmailModal.module.scss';

interface LoginWithEmailModalProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export function LoginWithEmailModal({
  isOpen,
  setOpen,
}: LoginWithEmailModalProps) {
  const { loginWithEmail } = useLoginWithEmail()
  
  const { value, changeHandler, submitHandler } = useForm<LoginFormData>(
    {
      email: '',
      password: '',
    },
    loginWithEmail,
  );

  return (
    <Modal
      title="Login with email"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      controls={<Button onClick={submitHandler}>Login</Button>}
    >
      <TextInput
        variant="outlined"
        placeholder="email"
        name="email"
        value={value.email}
        onChange={changeHandler}
        containerClassName={classes.email}
      />
      <PasswordInput
        variant="outlined"
        placeholder="password"
        name="password"
        value={value.password}
        onChange={changeHandler}
      />
    </Modal>
  );
}
