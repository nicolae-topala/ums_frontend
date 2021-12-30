import { Menu } from './menu.types';
import { isRouteActive } from './routeActive.types';

export const useProfileMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Change Email',
      route: '/change-email',
      active: isRouteActive('/change-email'),
    },
    {
      label: 'Change Password',
      route: '/change-password',
      active: isRouteActive('/change-password'),
    },
  ];

  return menu;
};
