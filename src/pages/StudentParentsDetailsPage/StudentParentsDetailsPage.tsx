import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentParentsDetailsPage.scss';

export const StudentParentsDetailsPage = (): React.ReactElement => {
  const menu = useStudentMenu();

  return (
    <Layout>
      <div className="student-parents-page">
        <div className="student-parents-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="student-parents">
          <div className="student-parents__title">Date părinţi</div>
          <div className="student-parents__description">
            <Table caption="Date tată" />
            <Table caption="Date mamă" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
