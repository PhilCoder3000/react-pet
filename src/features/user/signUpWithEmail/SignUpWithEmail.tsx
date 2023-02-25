import { SignUpFormData } from 'entities/user';
import { lazy, Suspense, useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';

const SignUpWithEmailModal = lazy(() => import('./modal/SignUpWithEmailModal'));
interface SignUpWithEmailProps {
  onSignUp: (arg: SignUpFormData) => void;
  isLoading?: boolean;
}

export function SignUpWithEmail({ onSignUp, isLoading }: SignUpWithEmailProps) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        color="secondary"
        onClick={() => setOpen(true)}
        isLoading={isLoading}
      >
        Sign up
      </Button>
      <Suspense>
        <SignUpWithEmailModal
          isOpen={isOpen}
          setOpen={setOpen}
          onSignUp={onSignUp}
          isLoading={isLoading}
        />
      </Suspense>
    </>
  );
}
