import { MenuPage } from './menuPage.types';

export const useStudentMenu = (): MenuPage[] => {
  const menu = [
    {
      label: 'Date generale',
      value: 'student-data',
    },
    {
      label: 'Şcolaritate',
      value: 'student-education',
    },
    {
      label: 'Date părinţi',
      value: 'student-parents-details',
    },
    {
      label: 'Contact',
      value: 'student-contact',
    },
  ];

  return menu;
};
