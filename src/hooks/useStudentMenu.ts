import { Menu, isRouteActive } from './menu.types';

export const useStudentMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Date generale',
      route: '/student-data',
      active: isRouteActive('/student-data'),
    },
  ];

  return menu;
};
