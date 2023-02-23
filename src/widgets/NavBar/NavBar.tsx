import { LoginWithEmail } from 'features/user/loginWithEmail';
import { SideBar } from 'widgets/SideBar';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <SideBar />
      <LoginWithEmail />
    </div>
  );
}
