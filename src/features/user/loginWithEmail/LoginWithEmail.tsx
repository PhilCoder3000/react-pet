import { useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { LoginWithEmailModal } from './modal/LoginWithEmailModal';

export function LoginWithEmail() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Login</Button>
      <LoginWithEmailModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}
