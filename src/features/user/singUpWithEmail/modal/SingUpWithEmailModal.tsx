import { useSelector } from 'app/providers/store';
import { selectUserAuth } from 'features/user/store/slice';
import { Button } from 'shared/ui/Buttons/Button';
import { PasswordInput } from 'shared/ui/Inputs/PasswordInput';
import { TextInput } from 'shared/ui/Inputs/Textinput';
import { Modal } from 'shared/ui/Modals/Modal';
import { useForm } from 'shared/utils/useForm/useForm';
import { SingUpFormData } from '../types';
import classes from './SingUpWithEmailModal.module.scss';

interface SingUpWithEmailModalProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  onSubmit: (arg: SingUpFormData) => void;
}

export function SingUpWithEmailModal({
  isOpen,
  setOpen,
  onSubmit,
}: SingUpWithEmailModalProps) {
  const { isPending } = useSelector(selectUserAuth);
  const { value, changeHandler, submitHandler } = useForm<SingUpFormData>(
    {
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
  );

  return (
    <Modal
      title="Sign up"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      controls={<Button onClick={submitHandler}>Sing up</Button>}
      isLoading={isPending}
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
