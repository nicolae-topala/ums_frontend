import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

import './GradesPage.scss';

export const GradesPage = (): React.ReactElement => {
  const menu = useGradesMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  const options2 = [
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  return (
    <Layout>
      <div className="grades-page">
        <div className="grades-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="grades">
          <div className="grades__title">Note</div>
          <div className="grades__description">
            <div className="grades__container">
              <span>An universitar</span>
              <Select
                className="grades__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <div className="grades__container">
              <span>Tip</span>
              <Select
                className="grades__container__input"
                options={options2}
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
