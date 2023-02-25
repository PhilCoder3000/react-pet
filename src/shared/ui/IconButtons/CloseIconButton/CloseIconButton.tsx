import { memo } from 'react';
import CloseIcon from 'shared/assets/svg/menu/close.svg';
import { IconButton, IconButtonProps } from '../IconButton';

type CloseIconButtonProps = IconButtonProps;

export const CloseIconButton = memo((props: CloseIconButtonProps) => (
  <IconButton data-testid="close-icon-button" {...props}>
    <CloseIcon />
  </IconButton>
));
