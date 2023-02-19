import Router from 'pages/Router';
import { Suspense } from 'react';
import { NavBar } from 'widgets/NavBar';

export function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Router />
      </Suspense>
    </>
  );
}
