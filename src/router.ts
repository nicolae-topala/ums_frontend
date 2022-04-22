import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ResetPage } from 'pages/ResetPage/ResetPage';
import { InfoPage } from 'pages/InfoPage/InfoPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';
import { StudentPage } from 'pages/StudentPage/StudentPage';
import { CurriculumPage } from 'pages/CurriculumPage/CurriculumPage';
import { FinancialPage } from 'pages/FinancialPage/FinancialPage';

export const routes = {
  allRoutes: [
    { path: '/info', element: InfoPage },
    { path: '/login', element: LoginPage },
    { path: '/reset-password', element: ResetPage },
    { path: '/reset-password/:token', element: ResetPage },
    { path: '/profile', element: ProfilePage },
    { path: '/student', element: StudentPage },
    { path: '/curriculum', element: CurriculumPage },
    { path: '/financial', element: FinancialPage },
  ],
  defaultRoute: {
    path: '/info',
    element: InfoPage,
  },
};
