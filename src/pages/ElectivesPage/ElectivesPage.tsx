import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

import './ElectivesPage.scss';

export const ElectivesPage = (): React.ReactElement => {
  const menu = useGradesMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="electives-page">
        <div className="electives-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="electives">
          <div className="electives__title">Discipline opţionale</div>
          <div className="electives__description">
            <div className="electives__container">
              <span>An universitar</span>
              <Select
                className="electives__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <Table large />
          </div>
        </div>
      </div>
    </Layout>
  );
};
