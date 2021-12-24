import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

interface RouterObject {
  path: string;
  element: React.FC;
}

interface Routes {
  allRoutes: RouterObject[];
  defaultRoute: RouterObject;
}

interface Props {
  routes: Routes;
}

export const RouterGenerator: React.FC<Props> = ({
  routes,
}): React.ReactElement => {
  return (
    <Router>
      <Routes>
        {routes.allRoutes.map((route: RouterObject) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        <Route
          path="/"
          element={<Navigate to={routes.defaultRoute.path} />}
        ></Route>
      </Routes>
    </Router>
  );
};
