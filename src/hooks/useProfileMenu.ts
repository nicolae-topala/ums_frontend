import { Menu, isRouteActive } from './menu.types';

export const useProfileMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Schimbă email',
      route: '/change-email',
      active: isRouteActive('/change-email'),
    },
    {
      label: 'Schimbă parola',
      route: '/change-password',
      active: isRouteActive('/change-password'),
    },
  ];

  return menu;
};
