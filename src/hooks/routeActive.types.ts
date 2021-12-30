export const isRouteActive = (route: string) => {
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route);
  return isActive;
};
