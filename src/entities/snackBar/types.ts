type Color = 'error' | 'warning' | 'info';

export interface SnackBarState {
  isOpen: boolean;
  color: Color;
  message: string;
}

export interface OpenSnackBarPayload {
  color?: Color;
  message: string;
}
