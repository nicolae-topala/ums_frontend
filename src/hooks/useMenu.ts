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

export const useMenu = (): Menu[] => {
  const menu = [
    { label: 'Info', route: '/info', active: isRouteActive('/info') },
    {
      label: 'Profil',
      route: '/change-email',
      active: isRouteActive('/change-email'),
    },
  ];

  return menu;
};
