import { firebaseAuth } from 'app/firebase';
import { useDispatch, useSelector } from 'app/providers/store';
import { store } from 'app/providers/store/store';
import { setUserInfo, setPending, selectUserAuth } from 'entities/user';
import { createUserWithEmail } from 'entities/user/api/createUserWithEmail';
import { signInUserWithEmail } from 'entities/user/api/signInUserWithEmail';
import { onAuthStateChanged } from 'firebase/auth';
import { SmallAvatar } from 'shared/ui/Avatar/SmallAvatar';
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
  const { isAuth, isPendingAuth } = useSelector(selectUserAuth);

  const { shouldRender } = useMountAndUnmount(!isAuth);

  if (shouldRender) {
    return (
      <>
        <SignInWithEmail
          btnClassName={classes.signIn}
          isLoading={isPendingAuth}
          onSignIn={(signInFormData) =>
            dispatch(signInUserWithEmail(signInFormData))
          }
        />
        <SignUpWithEmail
          isLoading={isPendingAuth}
          onSignUp={(signUpFormData) =>
            dispatch(createUserWithEmail(signUpFormData))
          }
        />
      </>
    );
  }

  return <SmallAvatar />;
}
