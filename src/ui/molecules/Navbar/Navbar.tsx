import React from 'react';
import env from '@beam-australia/react-env';
import { useNavigate } from 'react-router-dom';

import { useMenu } from 'hooks/useMenu';
import { Icon } from 'resources/icons/icons';

import './Navbar.scss';

export const Navbar = (): React.ReactElement => {
  const menu = useMenu();
  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__title">UMS</div>
        <div className="navbar__log-out">
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
