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
    {
      label: 'Opţionale',
      value: 'electives',
    },
  ];

  return menu;
};
