import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useProfileMenu } from 'hooks/useProfileMenu';

import './ProfileMenu.scss';

export const ProfileMenu = (): React.ReactElement => {
  const menu = useProfileMenu();
  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };

  return (
    <div className="profile">
      <div className="profile__menu">
        {menu.map((item) => (
          <div
            className="profile__menu__container"
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            <span
              className={`profile__menu__container__item${
                item.active ? '--active' : ''
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
