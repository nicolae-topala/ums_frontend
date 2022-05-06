import React from 'react';
import { useNavigate } from 'react-router-dom';
import { remove } from 'react-cookies';

import { auth } from 'libs/http/auth/auth';
import { useMenu } from 'hooks/useMenu';
import { Icon } from 'resources/icons/icons';

import './Navbar.scss';

export const Navbar = (): React.ReactElement => {
  const menu = useMenu();
  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };

  const logOut = async () => {
    await auth.logout();
    remove('accessToken', { path: '/' });
    remove('refreshToken', { path: '/' });
    navigate('/login');
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__title">USI</div>
        <div className="navbar__log-out" onClick={() => logOut()}>
          <Icon type="logOut" />
          <span>Ieșire</span>
        </div>
      </div>

      <div className="menu">
        {menu.map((item) => (
          <span
            className={`menu__item${item.active ? '--active' : ''}`}
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
};
