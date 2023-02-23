import { PropsWithChildren, useRef } from 'react';
import { Portal } from 'shared/react/portal';
import { CloseIconButton } from 'shared/ui/IconButtons/CloseIconButton';
import { classnames } from 'shared/utils/classnames/classnames';
import { useKeyDownEvent } from 'shared/utils/DOMhooks/useKeyDownEvent';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import { useOutsideClick } from 'shared/utils/DOMhooks/useOutsideClick';
import classes from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  controls?: React.ReactNode | React.ReactNode[];
}

export function Modal({
  children,
  title,
  isOpen,
  onClose,
  controls,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(contentRef, onClose);
  useKeyDownEvent(onClose, ['Escape']);
  const { shouldRender, animation } = useMountAndUnmount(isOpen, 300);

  if (shouldRender) {
    return (
      <Portal>
        <div
          className={classnames(classes.popup, {
            [classes.open]: animation,
          })}
        >
          <div ref={contentRef} className={classes.modal}>
            <div className={classes.modal_header}>
              <p>{title}</p>
              <CloseIconButton color="secondary" onClick={onClose} />
            </div>
            <div className={classes.modal_body}>{children}</div>
            {controls && <div className={classes.modal_footer}>{controls}</div>}
          </div>
        </div>
      </Portal>
    );
  }
  return null;
}
