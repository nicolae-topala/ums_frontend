import { Menu, isRouteActive } from './menu.types';

export const useGradesMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Discipline',
      route: '/curriculum',
      active: isRouteActive('/curriculum'),
    },
    {
      label: 'Note',
      route: '/view-grades',
      active: isRouteActive('/view-grades'),
    },
    {
      label: 'Opţionale',
      route: '/electives',
      active: isRouteActive('/electives'),
    },
  ];

  return menu;
};
