import { LoginPage } from 'pages/LoginPage/LoginPage';
import { InfoPage } from 'pages/InfoPage/InfoPage';
import { ChangeEmailPage } from 'pages/ChangeEmailPage/ChangeEmailPage';
import { ChangePasswordPage } from 'pages/ChangePasswordPage/ChangePasswordPage';

export const routes = {
  allRoutes: [
    { path: '/info', element: InfoPage },
    { path: '/login', element: LoginPage },
    { path: '/change-email', element: ChangeEmailPage },
    { path: '/change-password', element: ChangePasswordPage },
  ],
  defaultRoute: {
    path: '/info',
    element: InfoPage,
  },
};
