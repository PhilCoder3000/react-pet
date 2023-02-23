import { firebaseAuth } from 'app/firebase';
import { useDispatch } from 'app/providers/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { LoginFormData } from '../types';

export const useLoginWithEmail = () => {
  const dispatch = useDispatch()
  const loginWithEmail = async ({ email, password }: LoginFormData) => {
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    // dispatch(setUser(user))
  };

  return {
    loginWithEmail,
  };
};
