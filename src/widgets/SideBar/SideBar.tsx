import { useRef, useState } from 'react';
import { Portal } from 'shared/react/portal';
import { IconButton } from 'shared/ui/IconButton';
import { classnames } from 'shared/utils/classnames/classnames';
import { useOutsideClick } from 'shared/utils/useOutsideClick/useOutsideClick';
import classes from './SideBar.module.scss';

export function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(sideBarRef, () => setOpen(false));

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>S</IconButton>
      <Portal>
        <div
          ref={sideBarRef}
          className={classnames(classes.container, { [classes.open]: isOpen })}
        >
          <IconButton onClick={() => setOpen(false)}>X</IconButton>
          Sidebar
        </div>
      </Portal>
    </>
  );
}
