import React, { Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import { classnames } from './helpers/classnames/classnames';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import { useTheme } from './theme/useTheme';

const className = classnames(classes.header, 'asdf', {'true': true, 'false': false}, ['abc', 'def']);

export function App() {
  const { toggleTheme, theme } = useTheme();
  console.log('🚀 ~ file: App.tsx:12 ~ App ~ theme', theme);

  // const className = useMemo(() => classnames(classes.header, 'asdf', {'true': true, 'false': false}, ['abc', 'def']), []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className={className}>
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
