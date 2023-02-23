import { ThemeProvider } from 'app/providers/theme';

export const renderWithThemeProvider = (children: React.ReactNode) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)