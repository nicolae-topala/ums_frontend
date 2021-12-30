interface Menu {
  label: string;
  route: string;
  active: boolean;
}

const isRouteActive = (route: string) => {
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};

export const useStudentMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Date generale',
      route: '/student-data',
      active: isRouteActive('/student-data'),
    },
  ];

  return menu;
};
