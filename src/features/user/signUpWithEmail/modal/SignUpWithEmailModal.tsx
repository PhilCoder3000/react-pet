import { SignUpFormData } from 'entities/user';
import { Button } from 'shared/ui/Buttons/Button';
import { PasswordInput } from 'shared/ui/Inputs/PasswordInput';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { Modal } from 'shared/ui/Modals/Modal';
import { useForm } from 'shared/utils/useForm/useForm';
import classes from './SignUpWithEmailModal.module.scss';

interface SignUpWithEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: (arg: SignUpFormData) => void;
  isLoading: boolean;
}

function SignUpWithEmailModal({
  isOpen,
  onClose,
  onSignUp,
  isLoading,
}: SignUpWithEmailModalProps) {
  const { value, changeHandler, submitHandler } = useForm<SignUpFormData>(
    {
      name: '',
      email: '',
      password: '',
    },
    onSignUp,
  );

  return (
    <Modal
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      controls={<Button onClick={submitHandler}>Sign up</Button>}
      isLoading={isLoading}
    >
      <TextInput
        variant="outlined"
        placeholder="Name"
        name="name"
        value={value.name}
        onChange={changeHandler}
        containerClassName={classes.name}
      />
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

export default SignUpWithEmailModal
