import { useDispatch, useSelector } from 'app/providers/store';
import { deleteError, selectUserAuth } from 'entities/user';
import { useCallback } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { PasswordInput } from 'shared/ui/Inputs/PasswordInput';
import { TextInput } from 'shared/ui/Inputs/TextInput';
import { Modal } from 'shared/ui/Modals/Modal';
import { useForm } from 'shared/utils/useForm/useForm';
import { SignInFormData } from '../../../../entities/user/types';
import classes from './SignInWithEmailModal.module.scss';

interface SignInWithEmailModalProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  onSignIn: (arg: SignInFormData) => void;
  isLoading: boolean;
}

function SignInWithEmailModal({
  isOpen,
  setOpen,
  onSignIn,
  isLoading,
}: SignInWithEmailModalProps) {
  const { errors } = useSelector(selectUserAuth);
  const dispatch = useDispatch();

  const { value, changeHandler, submitHandler } = useForm<SignInFormData>(
    {
      email: '',
      password: '',
    },
    onSignIn,
    {
      email: {
        isRequired: true,
      },
      password: {
        isRequired: true,
      },
    },
  );

  const changeHandlerWithClearError = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeHandler(e);
      if (errors[e.target.name]) {
        dispatch(deleteError(e.target.name));
      }
    },
    [changeHandler, dispatch, errors],
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
        onChange={changeHandlerWithClearError}
        containerClassName={classes.email}
        isError={!!errors.email}
        errorMessage={errors.email}
      />
      <PasswordInput
        variant="outlined"
        placeholder="password"
        name="password"
        value={value.password}
        onChange={changeHandlerWithClearError}
        isError={!!errors.password}
        errorMessage={errors.password}
      />
    </Modal>
  );
}

export default SignInWithEmailModal;
