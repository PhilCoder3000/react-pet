import { firebaseAuth } from 'app/firebase';
import { useDispatch } from 'app/providers/store';
import { setError, setPending, setUserInfo } from 'features/user/store/slice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SingUpFormData } from '../types';

export const useCreateUserWithEmail = (setOpen: (arg: boolean) => void) => {
  const dispatch = useDispatch();

  const createUser = async ({ email, password }: SingUpFormData) => {
    try {
      dispatch(setPending(true));
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      dispatch(
        setUserInfo({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
        }),
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
      dispatch(setError());
    }
  };

  return {
    createUser,
  };
};
