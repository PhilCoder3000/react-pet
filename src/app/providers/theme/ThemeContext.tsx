/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { ThemeContextProps } from './types';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});
