import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

import './CurriculumPage.scss';

export const CurriculumPage = (): React.ReactElement => {
  const menu = useGradesMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="curriculum-page">
        <div className="curriculum-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="curriculum">
          <div className="curriculum__title">Discipline</div>
          <div className="curriculum__description">
            <span>Facultatea de Ştiinţe Exacte şi Inginereşti</span>
            <div className="curriculum__container">
              <span>An universitar</span>
              <Select
                className="curriculum__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
};
