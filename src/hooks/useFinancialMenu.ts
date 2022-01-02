import { Menu, isRouteActive } from './menu.types';

export const useFinancialMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Info financiar',
      route: '/financial',
      active: isRouteActive('/financial'),
    },
    {
      label: 'Documente plată',
      route: '/payments',
      active: isRouteActive('/payments'),
    },
    {
      label: 'Reduceri',
      route: '/discounts',
      active: isRouteActive('/discounts'),
    },
  ];

  return menu;
};
