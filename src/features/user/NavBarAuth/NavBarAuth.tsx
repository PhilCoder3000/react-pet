import { firebaseAuth } from 'app/firebase';
import { useDispatch, useSelector } from 'app/providers/store';
import { store } from 'app/providers/store/store';
import { setUserInfo, setPending, selectUserAuth } from 'entities/user';
import { createUserWithEmail } from 'entities/user/api/createUserWithEmail';
import { signInUserWithEmail } from 'entities/user/api/signInUserWithEmail';
import { signOut } from 'entities/user/utils/signOut';
import { onAuthStateChanged } from 'firebase/auth';
import { SmallAvatar } from 'shared/ui/Avatar/SmallAvatar';
import { Button } from 'shared/ui/Buttons/Button';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import { SignInWithEmail } from '../signInWithEmail';
import { SignUpWithEmail } from '../signUpWithEmail';
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

  return (
    <>
      <SmallAvatar />
      <Button onClick={() => signOut()} isLoading={isPending}>
        Sign out
      </Button>
    </>
  );
}
