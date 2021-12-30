import { Menu } from './menu.types';
import { isRouteActive } from './routeActive.types';

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
