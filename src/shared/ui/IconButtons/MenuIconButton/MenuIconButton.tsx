import BurgerIcon from 'shared/assets/svg/menu/burger.svg';
import { IconButton, IconButtonProps } from '../IconButton';
import classes from './MenuIconButton.module.scss';

type MenuIconButtonProps = IconButtonProps;

export function MenuIconButton(props: MenuIconButtonProps) {
  return (
    <IconButton data-testid="menu-icon-button" {...props} className={classes.button}>
      <BurgerIcon className={classes.svg} />
    </IconButton>
  );
}
