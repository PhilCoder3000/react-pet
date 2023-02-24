import { useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { useCreateUserWithEmail } from './api/useCreateUserWithEmail';
import { SingUpWithEmailModal } from './modal/SingUpWithEmailModal';

export function SignUpWithEmail() {
  const [isOpen, setOpen] = useState(false)
  const { createUser } = useCreateUserWithEmail(setOpen)
  return (
    <>
      <Button color="secondary" onClick={() => setOpen(true)}>Sign up</Button>
      <SingUpWithEmailModal isOpen={isOpen} setOpen={setOpen} onSubmit={createUser} />
    </>
  );
}
