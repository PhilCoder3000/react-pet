import { useDispatch, useSelector } from 'app/providers/store';
import { closeSnackBar, selectSnackBar } from 'entities/snackBar/slice';
import { memo } from 'react';
import { Portal } from 'shared/react/portal';
import { classnames } from 'shared/utils/classnames/classnames';
import { useMountAndUnmount } from 'shared/utils/DOMhooks/useMountAndUnmount';
import classes from './SnackBar.module.scss';

export const SnackBar = memo(() => {
  const dispatch = useDispatch();
  const { isOpen, color, message } = useSelector(selectSnackBar);
  const { shouldRender, animation } = useMountAndUnmount(
    isOpen,
    350,
  );

  const closeHandler = () => dispatch(closeSnackBar());

  if (!shouldRender) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classnames(classes.container, classes[color], {
          [classes.open]: animation,
        })}
      >
        <button className={classes.closeBtn} onClick={closeHandler}>
          x
        </button>
        <p>{message}</p>
      </div>
    </Portal>
  );
});
