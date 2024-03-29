import ErrorBoundary, { PageErrorFallback } from 'app/providers/ErrorsHandling';
import { AppRoutes } from 'app/types/pagesPaths';
import { Suspense } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader';
import { AuthRoute } from 'shared/utils/router/AuthRoute';
import AboutPage from './AboutPage';
import CalculatorPage from './CalculatorPage';
import CandyCrush from './CandyCrushPage';
import ChatRooms from './CharRoomsPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';
import PersonalPage from './PersonalPage';
import PostPage from './PostPage';
import SudokuPage from './SudokuPage/SudokuPage';
import WritePostPage from './WritePostPage';

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
    path: AppRoutes.CANDY_CRUSH,
    element: <CandyCrush />,
  },
  {
    path: AppRoutes.PERSONAL_PAGE,
    element: (
      <AuthRoute>
        <PersonalPage />
      </AuthRoute>
    ),
  },
  {
    path: AppRoutes.WRITE_POST_PAGE,
    element: <WritePostPage />,
  },
  {
    path: `${AppRoutes.POST_PAGE}/:id`,
    element: <PostPage />,
  },
  {
    path: AppRoutes.CALCULATOR,
    element: <CalculatorPage />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: AppRoutes.CHAT_ROOMS,
    element: <ChatRooms />
  },
  {
    path: AppRoutes.SUDOKU,
    element: <SudokuPage />
  }
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
