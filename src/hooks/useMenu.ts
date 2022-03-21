import { Menu, isRouteActive } from './menuNav.types';

export const useMenu = (): Menu[] => {
  const menu = [
    { label: 'Info', route: '/info', active: isRouteActive('/info') },
    {
      label: 'Student',
      route: '/student',
      active: isRouteActive('/student'),
    },
    {
      label: 'Note',
      route: '/curriculum',
      active: isRouteActive('/curriculum'),
    },
    {
      label: 'Financiar',
      route: '/financial',
      active: isRouteActive('/financial'),
    },
    {
      label: 'Profil',
      route: '/profile',
      active: isRouteActive('/profile'),
    },
  ];

  return menu;
};
