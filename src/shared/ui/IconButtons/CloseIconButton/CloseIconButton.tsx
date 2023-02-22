import React from 'react';
import CloseIcon from 'shared/assets/svg/menu/close.svg';
import { IconButton, IconButtonProps } from '../IconButton';

type CloseIconButtonProps = IconButtonProps;

export function CloseIconButton(props: CloseIconButtonProps) {
  return (
    <IconButton data-testid="close-icon-button" {...props}>
      <CloseIcon />
    </IconButton>
  );
}
