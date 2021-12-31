import { Menu, isRouteActive } from './menu.types';

export const useStudentMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Date generale',
      route: '/student-data',
      active: isRouteActive('/student-data'),
    },
    {
      label: 'Şcolaritate',
      route: '/student-education',
      active: isRouteActive('/student-education'),
    },
    {
      label: 'Date părinţi',
      route: '/student-parents-details',
      active: isRouteActive('/student-parents-details'),
    },
    {
      label: 'Contact',
      route: '/student-contact',
      active: isRouteActive('/student-contact'),
    },
  ];

  return menu;
};
