import Router from 'pages/Router';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader';
import { NavBar } from 'widgets/NavBar';

export function App() {

  return (
    <>
      <NavBar />
      <Suspense fallback={<PageLoader />}>
        <Router />
      </Suspense>
    </>
  );
}
