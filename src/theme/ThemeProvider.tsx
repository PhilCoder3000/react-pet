import React, { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { AppTheme } from './types';

const LOCAL_STORAGE_THEME_KEY = 'theme';

const getDefaultTheme = (): AppTheme => {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (localStorageTheme) {
    return localStorageTheme as AppTheme;
  }
  return 'light';
};

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<AppTheme>(getDefaultTheme);

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const memoizedValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}
