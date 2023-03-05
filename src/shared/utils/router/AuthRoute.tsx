import { useSelector } from 'app/providers/store';
import { selectUserAuth } from 'entities/user';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: React.ReactElement;
}

export function AuthRoute({
  children,
}: AuthRouteProps) {
  const { isAuth } = useSelector(selectUserAuth)
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
}
