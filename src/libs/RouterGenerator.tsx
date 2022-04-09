import { UserContext } from 'context/UserContext';
import React, { useEffect } from 'react';
import { load } from 'react-cookies';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { setIsUserLogged } = React.useContext(UserContext);

  useEffect(() => {
    if (load('accessToken')) setIsUserLogged(true);
    else {
      setIsUserLogged(false);
      navigate('/login');
    }
  }, []);

  return (
    <Routes>
      {routes.allRoutes.map((route: RouterObject) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}

      <Route
        path="/"
        element={<Navigate to={routes.defaultRoute.path} />}
      ></Route>
    </Routes>
  );
};
