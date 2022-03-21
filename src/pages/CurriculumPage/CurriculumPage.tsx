import React, { useState } from 'react';
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
  const [pageValue, setPageValue] = useState('curriculum');

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
      <div className="curriculum-page">
        <div className="curriculum-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>

        {pageValue == 'curriculum' ? (
          <div className="curriculum">
            <div className="curriculum__title">Discipline</div>
            <div className="curriculum__description">
              <p>Facultatea de Ştiinţe Exacte şi Inginereşti</p>
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={options}
                  isSearchable={false}
                />
              </div>
              <Table large />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'grades' ? (
          <div className="curriculum">
            <div className="curriculum__title">Note</div>
            <div className="curriculum__description">
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={options}
                  isSearchable={false}
                />
              </div>
              <div className="curriculum__container">
                <p>Tip</p>
                <Select
                  className="curriculum__container__input"
                  options={options2}
                  isSearchable={false}
                />
              </div>
              <Table large />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'electives' ? (
          <div className="curriculum">
            <div className="curriculum__title">Discipline opţionale</div>
            <div className="curriculum__description">
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={options}
                  isSearchable={false}
                />
              </div>
              <Table large />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
