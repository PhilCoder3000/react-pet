import { NavBarAuth } from 'features/user/NavBarAuth/NavBarAuth';
import { SideBar } from 'widgets/SideBar';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <SideBar />
      <NavBarAuth />
    </div>
  );
}
