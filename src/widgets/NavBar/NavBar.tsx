import { AppRoutes } from 'app/types/pagesPaths';
import { Link } from 'shared/ui/Link';
import { SideBar } from 'widgets/SideBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <SideBar />
      <Link className={classes.link} to={AppRoutes.MAIN}>Main</Link>
      <Link className={classes.link} to={AppRoutes.ABOUT}>About</Link>
      <ThemeSwitcher />
    </div>
  );
}
