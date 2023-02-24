import { useSelector } from 'app/providers/store';
import { selectUserAuth } from 'features/user/store/slice';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { SignInWithEmailModal } from './modal/SignInWithEmailModal';
import { SignInFormData } from './types';

interface SignInWithEmailProps {
  onSignIn: (arg: SignInFormData) => void;
  btnClassName?: string;
  isLoading?: boolean;
}

export function SignInWithEmail({
  onSignIn,
  btnClassName,
  isLoading,
}: SignInWithEmailProps) {
  const { isAuth } = useSelector(selectUserAuth);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setOpen(false);
    }
  }, [isAuth]);

  return (
    <>
      <Button className={btnClassName} onClick={() => setOpen(true)} isLoading={isLoading}>
        Sign in
      </Button>
      <SignInWithEmailModal
        isOpen={isOpen}
        setOpen={setOpen}
        onSignIn={onSignIn}
        isLoading={isLoading}
      />
    </>
  );
}
