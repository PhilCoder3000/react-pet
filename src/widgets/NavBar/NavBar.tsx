import { useTheme } from 'app/providers/theme';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';

export function NavBar() {
  const { toggleTheme } = useTheme();
  return (
    <div className={classes.header}>
      <Link className={classes.link} to="/">Main</Link>
      <Link className={classes.link} to="/about">About</Link>
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
}
