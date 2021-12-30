import { LoginPage } from 'pages/LoginPage/LoginPage';
import { InfoPage } from 'pages/InfoPage/InfoPage';
import { ChangeEmailPage } from 'pages/ChangeEmailPage/ChangeEmailPage';
import { ChangePasswordPage } from 'pages/ChangePasswordPage/ChangePasswordPage';
import { StudentDataPage } from 'pages/StudentDataPage/StudentDataPage';

export const routes = {
  allRoutes: [
    { path: '/info', element: InfoPage },
    { path: '/login', element: LoginPage },
    { path: '/change-email', element: ChangeEmailPage },
    { path: '/change-password', element: ChangePasswordPage },
    { path: '/student-data', element: StudentDataPage },
  ],
  defaultRoute: {
    path: '/info',
    element: InfoPage,
  },
};
