import { AppRoutes } from 'app/types/pagesPaths';
import { useRef, useState } from 'react';
import { Portal } from 'shared/react/portal';
import { Divider } from 'shared/ui/Divider';
import { CloseIconButton } from 'shared/ui/IconButtons/CloseIconButton';
import { MenuIconButton } from 'shared/ui/IconButtons/MenuIconButton';
import { Link } from 'shared/ui/Link';
import { classnames } from 'shared/utils/classnames/classnames';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import { useOutsideClick } from 'shared/utils/DOMhooks/useOutsideClick';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classes from './SideBar.module.scss';

export function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(sideBarRef, () => setOpen(false));
  const { shouldRender, animation } = useMountAndUnmount(isOpen);

  return (
    <>
      <MenuIconButton className={classes.sidebarBtn} onClick={() => setOpen(true)} />
      {shouldRender && (
        <Portal>
          <div
            ref={sideBarRef}
            className={classnames(classes.container, {
              [classes.open]: animation,
            })}
          >
            <CloseIconButton
              className={classes.closeBtn}
              onClick={() => setOpen(false)}
            />
            <Link
              color="secondary"
              className={classes.link}
              to={AppRoutes.MAIN}
              onClick={() => setOpen(false)}
            >
              Main
            </Link>
            <Divider />
            <Link
              color="secondary"
              className={classes.link}
              to={AppRoutes.ABOUT}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Divider />
            <ThemeSwitcher className={classes.themeSwitcher} />
          </div>
        </Portal>
      )}
    </>
  );
}
