import { useSelector } from 'app/providers/store';
import { selectUserAuth, SignInFormData } from 'entities/user';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';

const SignInWithEmailModal = lazy(() => import('./modal/SignInWithEmailModal'));

interface SignInWithEmailProps {
  onSignIn: (arg: SignInFormData) => void;
  btnClassName?: string;
  isLoading: boolean;
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
      <Button
        className={btnClassName}
        onClick={() => setOpen(true)}
        isLoading={isLoading}
      >
        Sign in
      </Button>
      <Suspense>
        <SignInWithEmailModal
          isOpen={isOpen}
          setOpen={setOpen}
          onSignIn={onSignIn}
          isLoading={isLoading}
        />
      </Suspense>
    </>
  );
}
