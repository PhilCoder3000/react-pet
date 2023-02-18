import { Link } from 'shared/ui/Link';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './NavBar.module.scss';

export function NavBar() {
  return (
    <div className={classes.header}>
      <Link className={classes.link} to="/">Main</Link>
      <Link className={classes.link} to="/about">About</Link>
      <ThemeSwitcher />
    </div>
  );
}
