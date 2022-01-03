import { Menu, isRouteActive } from './menu.types';

export const useAccommodationMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Cazări',
      route: '/accommodation',
      active: isRouteActive('/accommodation'),
    },
  ];

  return menu;
};
