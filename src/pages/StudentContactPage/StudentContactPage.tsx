import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentContactPage.scss';

export const StudentContactPage = (): React.ReactElement => {
  const menu = useStudentMenu();

  return (
    <Layout>
      <div className="student-contact-page">
        <div className="student-contact-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="student-contact">
          <div className="student-contact__title">Contact</div>
          <div className="student-contact__description">
            <Table caption="Domiciliul stabil" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
