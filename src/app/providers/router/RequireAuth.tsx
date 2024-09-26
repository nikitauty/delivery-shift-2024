import { Navigate, useLocation } from 'react-router-dom';

import { getRouteAuth } from '@/shared/constants/router';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
