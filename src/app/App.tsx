import React, { Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import { useTheme } from './providers/theme';

export function App() {
  const { toggleTheme } = useTheme();

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div>
        <button onClick={toggleTheme}>theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}
