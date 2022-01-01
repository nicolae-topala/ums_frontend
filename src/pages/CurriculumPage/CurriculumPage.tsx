import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

import './CurriculumPage.scss';

export const CurriculumPage = (): React.ReactElement => {
  const menu = useGradesMenu();

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
            <span>An universitar </span>
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
};
