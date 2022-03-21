import React, { useState } from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentPage.scss';

export const StudentPage = (): React.ReactElement => {
  const menu = useStudentMenu();

  const [pageValue, setPageValue] = useState('student-data');

  return (
    <Layout>
      <div className="student-data-page">
        <div className="student-data-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>
        {pageValue == 'student-data' ? (
          <div className="student-data">
            <div className="student-data__title">Date student</div>
            <div className="student-data__description">
              <Table caption="Date generale" />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-education' ? (
          <div className="student-data">
            <div className="student-data__title">Şcolaritate</div>
            <div className="student-data__description">
              <Table caption="Informaţii şcolaritate" />
              <Table caption="Context şcolaritate" />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-parents-details' ? (
          <div className="student-data">
            <div className="student-data__title">Date părinţi</div>
            <div className="student-data__description">
              <Table caption="Date tată" />
              <Table caption="Date mamă" />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-contact' ? (
          <div className="student-data">
            <div className="student-data__title">Contact</div>
            <div className="student-data__description">
              <Table caption="Domiciliul stabil" />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
