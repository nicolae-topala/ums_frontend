import { LoginPage } from 'pages/LoginPage/LoginPage';
import { InfoPage } from 'pages/InfoPage/InfoPage';

export const routes = {
  allRoutes: [
    { path: '/info', element: InfoPage },
    { path: '/login', element: LoginPage },
  ],
  defaultRoute: {
    path: '/info',
    element: InfoPage,
  },
};
