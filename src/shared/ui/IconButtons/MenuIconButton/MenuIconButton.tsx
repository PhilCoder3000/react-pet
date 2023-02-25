import { memo } from 'react';
import BurgerIcon from 'shared/assets/svg/menu/burger.svg';
import { IconButton, IconButtonProps } from '../IconButton';

type MenuIconButtonProps = IconButtonProps;

export const MenuIconButton = memo((props: MenuIconButtonProps) => (
  <IconButton data-testid="menu-icon-button" {...props}>
    <BurgerIcon />
  </IconButton>
));
