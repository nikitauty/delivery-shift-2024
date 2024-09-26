import { Route, Routes } from 'react-router-dom';

import { routeConfig } from './config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const Router = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route?.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
        />
      ))}
    </Routes>
  );
};
