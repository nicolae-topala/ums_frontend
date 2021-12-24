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

export const useProfileMenu = (): Menu[] => {
  const menu = [
    {
      label: 'Change Email',
      route: '/change-email',
      active: isRouteActive('/change-email'),
    },
    {
      label: 'Change Password',
      route: '/change-password',
      active: isRouteActive('/change-password'),
    },
  ];

  return menu;
};
