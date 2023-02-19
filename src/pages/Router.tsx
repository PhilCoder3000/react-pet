import { AppRoutes } from 'app/types/pagesPaths';
import { Suspense } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
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
  <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
      {routesConfig.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  </Suspense>
);

export default Router;
