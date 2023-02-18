export type AppTheme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: AppTheme,
  setTheme: (arg: AppTheme) => void
  toggleTheme: () => void;
}
