import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu as typeMenu } from 'hooks/menu.types';

import './Menu.scss';

interface Props {
  menu: typeMenu[];
}

export const Menu: React.FC<Props> = ({ menu }): React.ReactElement => {
  const menus = menu;

  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };

  return (
    <div className="page">
      <div className="page__menu">
        {menus.map((item) => (
          <div
            className="page__menu__container"
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            <span
              className={`page__menu__container__item${
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
