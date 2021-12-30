import { Menu, isRouteActive } from './menu.types';

export const useMenu = (): Menu[] => {
  const menu = [
    { label: 'Info', route: '/info', active: isRouteActive('/info') },
    {
      label: 'Date Student',
      route: '/student-data',
      active: isRouteActive('/student-data'),
    },
    {
      label: 'Profil',
      route: '/change-email',
      active: isRouteActive('/change-email'),
    },
  ];

  return menu;
};
