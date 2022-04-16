import { MenuPage } from './menuPage.types';

export const useFinancialMenu = (): MenuPage[] => {
  const menu = [
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
