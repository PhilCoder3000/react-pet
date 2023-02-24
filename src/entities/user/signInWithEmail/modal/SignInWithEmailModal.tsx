import { Button } from 'shared/ui/Buttons/Button';
import { PasswordInput } from 'shared/ui/Inputs/PasswordInput';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { Modal } from 'shared/ui/Modals/Modal';
import { useForm } from 'shared/utils/useForm/useForm';
import { SignInFormData } from '../types';
import classes from './SignInWithEmailModal.module.scss';

interface SignInWithEmailModalProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  onSignIn: (arg: SignInFormData) => void
  isLoading: boolean;
}

export function SignInWithEmailModal({
  isOpen,
  setOpen,
  onSignIn,
  isLoading,
}: SignInWithEmailModalProps) {

  const { value, changeHandler, submitHandler } = useForm<SignInFormData>(
    {
      email: '',
      password: '',
    },
    onSignIn
  );

  return (
    <Modal
      title="Login"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      controls={<Button onClick={submitHandler}>Login</Button>}
      isLoading={isLoading}
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
