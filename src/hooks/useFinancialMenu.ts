import { MenuPage } from './menuPage.types';

export const useFinancialMenu = (): MenuPage[] => {
  const menu = [
    {
      label: 'Info financiar',
      value: 'financial',
    },
    {
      label: 'Documente plată',
      value: 'payments',
    },
    {
      label: 'Reduceri',
      value: 'discounts',
    },
  ];

  return menu;
};
