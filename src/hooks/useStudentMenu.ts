import { MenuPage } from './menuPage.types';

export const useStudentMenu = (): MenuPage[] => {
  const menu = [
    {
      label: 'Date generale',
      value: 'student-data',
    },
    {
      label: 'Adrese',
      value: 'student-address',
    },
    {
      label: 'Apartenență',
      value: 'student-belonging',
    },
    {
      label: 'Studii anterioare',
      value: 'student-prevStudies',
    },
    {
      label: 'Şcolaritate',
      value: 'student-education',
    },
    {
      label: 'Contact',
      value: 'student-contact',
    },
  ];

  return menu;
};
