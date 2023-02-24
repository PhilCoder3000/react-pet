import { firebaseAuth } from 'app/firebase';
import { store } from 'app/providers/store/store';
import { logOut } from '../slice';

export const signOut = () => {
  store.dispatch(logOut());
  firebaseAuth.signOut();
};
