import { PropsWithChildren, useRef } from 'react';
import { Portal } from 'shared/react/portal';
import { CloseIconButton } from 'shared/ui/IconButtons/CloseIconButton';
import { classnames } from 'shared/utils/classnames/classnames';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import { useOutsideClick } from 'shared/utils/DOMhooks/useOutsideClick';
import classes from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
  title: string;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export function Modal({ children, title, isOpen, setOpen }: ModalProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(contentRef, () => setOpen(false));
  const { shouldRender, animation } = useMountAndUnmount(isOpen, 300);
  return (
    <Portal>
      {shouldRender && (
        <div className={classes.popup}>
          <div
            ref={contentRef}
            className={classnames(classes.modal, {
              [classes.open]: animation,
            })}
          >
            <div className={classes.modal_header}>
              <p>{title}</p>
              <CloseIconButton onClick={() => setOpen(false)} />
            </div>
            <div className={classes.modal_body}>{children}</div>
            <div className={classes.modal_footer}></div>
          </div>
        </div>
      )}
    </Portal>
  );
}
