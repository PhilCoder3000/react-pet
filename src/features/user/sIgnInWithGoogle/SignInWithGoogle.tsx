import { useDispatch } from 'app/providers/store';
import { signInUserWithGoogle } from 'entities/user/api/signInUserWithGoogle';
import { memo } from 'react';
import { IconButton } from 'shared/ui/IconButtons/IconButton';
import GoogleLogo from './assets/google_logo.svg';
import classes from './SignInWithGoogle.module.scss';

export const SignInWithGoogle = memo(() => {
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => dispatch(signInUserWithGoogle())}
      className={classes.googleBtn}
      color="secondary"
    >
      <GoogleLogo />
    </IconButton>
  );
});
