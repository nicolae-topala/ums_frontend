import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentMenu.scss';

export const StudentMenu = (): React.ReactElement => {
  const menu = useStudentMenu();
  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };

  return (
    <div className="student">
      <div className="student__menu">
        {menu.map((item) => (
          <div
            className="student__menu__container"
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            <span
              className={`student__menu__container__item${
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
