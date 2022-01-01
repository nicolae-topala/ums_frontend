import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentEducationPage.scss';

export const StudentEducationPage = (): React.ReactElement => {
  const menu = useStudentMenu();

  return (
    <Layout>
      <div className="student-education-page">
        <div className="student-education-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="student-education">
          <div className="student-education__title">Şcolaritate</div>
          <div className="student-education__description">
            <Table caption="Informaţii şcolaritate" />
            <Table caption="Context şcolaritate" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
