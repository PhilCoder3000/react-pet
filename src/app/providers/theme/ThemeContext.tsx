import { createContext } from 'react';
import { ThemeContextProps } from './types';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});
