import { MenuPage } from './menuPage.types';

export const useProfileMenu = (): MenuPage[] => {
  const menu = [
    {
      label: 'Schimbă email',
      value: 'change-email',
    },
    {
      label: 'Schimbă parola',
      value: 'change-password',
    },
  ];

  return menu;
};
