import Router from 'pages/Router';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader';
import { NavBar } from 'widgets/NavBar';
import { SnackBar } from 'widgets/SnackBar/SnackBar';

export function App() {

  return (
    <>
      <NavBar />
      <Suspense fallback={<PageLoader />}>
        <Router />
      </Suspense>
      <SnackBar />
    </>
  );
}
