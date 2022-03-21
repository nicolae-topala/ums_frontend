import React from 'react';

import { MenuPage as typeMenu } from 'hooks/menuPage.types';

import './Menu.scss';

interface Props {
  menu: typeMenu[];
  pageValue: string;
  onChange: (value: string) => void;
}

export const Menu: React.FC<Props> = ({
  menu,
  pageValue,
  onChange,
}): React.ReactElement => {
  return (
    <div className="page">
      <div className="page__menu">
        {menu.map((item) => (
          <div
            className="page__menu__container"
            key={item.value}
            onClick={() => {
              onChange(item.value);
            }}
          >
            <span
              className={`page__menu__container__item${
                item.value == pageValue ? '--active' : ''
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
