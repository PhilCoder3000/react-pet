import { AppRoutes } from 'app/types/pagesPaths';
import { useState } from 'react';
import { Button } from 'shared/ui/Buttons/Button';
import { Link } from 'shared/ui/Link';
import { Modal } from 'shared/ui/Modals/Modal';
import { SideBar } from 'widgets/SideBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './NavBar.module.scss';

export function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={classes.header}>
      <SideBar />
      <Link className={classes.link} to={AppRoutes.MAIN}>
        Main
      </Link>
      <Link className={classes.link} to={AppRoutes.ABOUT}>
        About
      </Link>
      <ThemeSwitcher />
      <Button onClick={() => setOpen(true)}>modal</Button>
      <Modal isOpen={isOpen} title="title" onClose={() => setOpen(false)}>
        modal body
      </Modal>
    </div>
  );
}
