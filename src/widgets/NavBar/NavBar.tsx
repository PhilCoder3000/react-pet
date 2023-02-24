import { LoginWithEmail } from 'features/user/loginWithEmail';
import { SignUpWithEmail } from 'features/user/singUpWithEmail/SignUpWithEmail';
import { SideBar } from 'widgets/SideBar';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <SideBar />
      <LoginWithEmail />
      <SignUpWithEmail />
    </div>
  );
}
