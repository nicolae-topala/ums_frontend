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
  ];

  return menu;
};
