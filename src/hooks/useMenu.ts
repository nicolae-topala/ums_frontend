import { Menu } from './menu.types';

export const useMenu = (): Menu[] => {
  const menu = [
    { label: 'Info', route: '/info' },
    {
      label: 'Student',
      route: '/student-data',
    },
    {
      label: 'Note',
      route: '/curriculum',
    },
    {
      label: 'Financiar',
      route: '/financial',
    },
    {
      label: 'Cazări',
      route: '/accommodation',
    },
    {
      label: 'Profil',
      route: '/change-email',
    },
  ];

  return menu;
};
