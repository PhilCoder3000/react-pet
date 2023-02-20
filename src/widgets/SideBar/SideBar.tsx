import { useRef, useState } from 'react';
import { Portal } from 'shared/react/portal';
import { CloseIconButton } from 'shared/ui/IconButtons/CloseIconButton';
import { MenuIconButton } from 'shared/ui/IconButtons/MenuIconButton';
import { classnames } from 'shared/utils/classnames/classnames';
import { useOutsideClick } from 'shared/utils/useOutsideClick/useOutsideClick';
import classes from './SideBar.module.scss';

export function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(sideBarRef, () => setOpen(false));

  return (
    <>
      <MenuIconButton onClick={() => setOpen(true)} />
      <Portal>
        <div
          ref={sideBarRef}
          className={classnames(classes.container, { [classes.open]: isOpen })}
        >
          <CloseIconButton onClick={() => setOpen(false)} />
          Sidebar
        </div>
      </Portal>
    </>
  );
}
