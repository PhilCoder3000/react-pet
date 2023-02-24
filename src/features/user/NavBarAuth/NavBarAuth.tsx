import { firebaseAuth } from 'app/firebase';
import { useDispatch, useSelector } from 'app/providers/store';
import { store } from 'app/providers/store/store';
import { SignInWithEmail } from 'entities/user/signInWithEmail';
import { SignUpWithEmail } from 'entities/user/signUpWithEmail';
import {
  selectUserAuth,
  setPending,
  setUserInfo,
} from 'features/user/store/slice';
import { onAuthStateChanged } from 'firebase/auth';
import { Button } from 'shared/ui/Buttons/Button';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import { createUserWithEmail } from './api/createUserWithEmail';
import { signInUserWithEmail } from './api/signInUserWithEmail';
import classes from './NavBarAuth.module.scss';

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    store.dispatch(
      setUserInfo({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId,
      }),
    );
  } else {
    store.dispatch(setPending(false));
  }
});

export function NavBarAuth() {
  const dispatch = useDispatch();
  const { isAuth, isPending } = useSelector(selectUserAuth);

  const { shouldRender } = useMountAndUnmount(!isAuth && !isPending);
  if (shouldRender) {
    return (
      <>
        <SignInWithEmail
          btnClassName={classes.signIn}
          isLoading={isPending}
          onSignIn={(signInFormData) =>
            dispatch(signInUserWithEmail(signInFormData))
          }
        />
        <SignUpWithEmail
          isLoading={isPending}
          onSignUp={(signUpFormData) =>
            dispatch(createUserWithEmail(signUpFormData))
          }
        />
      </>
    );
  }
  return <Button isLoading={isPending}>Personal page</Button>;
}
