import { Menu, isRouteActive } from './menu.types';

export const useFinancialMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Info financiar',
      route: '/financial',
      active: isRouteActive('/financial'),
    },
  ];

  return menu;
};