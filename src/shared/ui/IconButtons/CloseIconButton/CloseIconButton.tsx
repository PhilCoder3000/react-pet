import React from 'react';
import CloseIcon from 'shared/assets/svg/menu/close.svg';
import { IconButton, IconButtonProps } from '../IconButton';
import classes from './CloseIconButton.module.scss';

type CloseIconButtonProps = IconButtonProps;

export function CloseIconButton(props: CloseIconButtonProps) {
  return (
    <IconButton data-testid="close-icon-button" {...props}>
      <CloseIcon className={classes.svg} />
    </IconButton>
  );
}
