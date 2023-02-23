import ErrorBoundary, { PageErrorFallback } from 'app/providers/ErrorsHandling';
import { AppRoutes } from 'app/types/pagesPaths';
import { Suspense } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader';
import AboutPage from './AboutPage';
import MainPage from './MainPage';
import { NotFoundPage } from './NotFoundPage';

const routesConfig: RouteProps[] = [
  {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

const Router = () => (
  <Routes>
    {routesConfig.map(({ path, element, ...otherProps }) => (
      <Route
        key={path}
        path={path}
        element={
          <ErrorBoundary fallback={<PageErrorFallback />}>
            <Suspense fallback={<PageLoader />}>{element}</Suspense>
          </ErrorBoundary>
        }
        {...otherProps}
      />
    ))}
  </Routes>
);

export default Router;
