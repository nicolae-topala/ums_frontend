import { MenuPage } from './menuPage.types';

export const useGradesMenu = (): MenuPage[] => {
  const menu = [
    {
      label: 'Discipline',
      value: 'curriculum',
    },
    {
      label: 'Note',
      value: 'grades',
    },
  ];

  return menu;
};
