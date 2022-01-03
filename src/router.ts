import { LoginPage } from 'pages/LoginPage/LoginPage';
import { InfoPage } from 'pages/InfoPage/InfoPage';
import { ChangeEmailPage } from 'pages/ChangeEmailPage/ChangeEmailPage';
import { ChangePasswordPage } from 'pages/ChangePasswordPage/ChangePasswordPage';
import { StudentDataPage } from 'pages/StudentDataPage/StudentDataPage';
import { StudentEducationPage } from 'pages/StudentEducationPage/StudentEducationPage';
import { StudentParentsDetailsPage } from 'pages/StudentParentsDetailsPage/StudentParentsDetailsPage';
import { StudentContactPage } from 'pages/StudentContactPage/StudentContactPage';
import { CurriculumPage } from 'pages/CurriculumPage/CurriculumPage';
import { GradesPage } from 'pages/GradesPage/GradesPage';
import { ElectivesPage } from 'pages/ElectivesPage/ElectivesPage';
import { FinancialPage } from 'pages/FinancialPage/FinancialPage';
import { PaymentsPage } from 'pages/PaymentsPage/PaymentsPage';
import { DiscountsPage } from 'pages/DiscountsPage/DiscountsPage';
import { AccommodationPage } from 'pages/AccommodationPage/AccommodationPage';

export const routes = {
  allRoutes: [
    { path: '/info', element: InfoPage },
    { path: '/login', element: LoginPage },
    { path: '/change-email', element: ChangeEmailPage },
    { path: '/change-password', element: ChangePasswordPage },
    { path: '/student-data', element: StudentDataPage },
    { path: '/student-education', element: StudentEducationPage },
    { path: '/student-parents-details', element: StudentParentsDetailsPage },
    { path: '/student-contact', element: StudentContactPage },
    { path: '/student-parents-details', element: StudentParentsDetailsPage },
    { path: '/curriculum', element: CurriculumPage },
    { path: '/view-grades', element: GradesPage },
    { path: '/electives', element: ElectivesPage },
    { path: '/financial', element: FinancialPage },
    { path: '/electives', element: ElectivesPage },
    { path: '/payments', element: PaymentsPage },
    { path: '/discounts', element: DiscountsPage },
    { path: '/accommodation', element: AccommodationPage },
  ],
  defaultRoute: {
    path: '/info',
    element: InfoPage,
  },
};
