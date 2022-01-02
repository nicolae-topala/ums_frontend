import { Menu } from './menu.types';

export const useMenu = (): Menu[] => {
  const menu = [
    { label: 'Info', route: '/info' },
    {
      label: 'Date Student',
      route: '/student-data',
    },
    {
      label: 'Situația școlară',
      route: '/curriculum',
    },
    {
      label: 'Financiar',
      route: '/financial',
    },
    {
      label: 'Profil',
      route: '/change-email',
    },
  ];

  return menu;
};
