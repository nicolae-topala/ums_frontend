import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentDataPage.scss';

export const StudentDataPage = (): React.ReactElement => {
  const menu = useStudentMenu();

  return (
    <Layout>
      <div className="student-data-page">
        <div className="student-data-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="student-data">
          <div className="student-data__title">Date student</div>
          <div className="student-data__description">
            <Table caption="Date generale" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
