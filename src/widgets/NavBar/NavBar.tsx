import { NavBarAuth } from 'features/user/NavBarAuth';
import { memo } from 'react';
import { SideBar } from 'widgets/SideBar';
import classes from './NavBar.module.scss';

export const NavBar = memo(() => (
  <div className={classes.header}>
    <SideBar />
    <NavBarAuth />
  </div>
));
