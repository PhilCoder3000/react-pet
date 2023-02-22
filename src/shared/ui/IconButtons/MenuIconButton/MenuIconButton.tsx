import BurgerIcon from 'shared/assets/svg/menu/burger.svg';
import { IconButton, IconButtonProps } from '../IconButton';

type MenuIconButtonProps = IconButtonProps;

export function MenuIconButton(props: MenuIconButtonProps) {
  return (
    <IconButton data-testid="menu-icon-button" {...props}>
      <BurgerIcon />
    </IconButton>
  );
}
