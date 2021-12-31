import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

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
            <table>
              <caption>Date tată</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="student-parents__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-parents__value">GET value</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <caption>Date mamă</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="student-parents__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-parents__value">GET value</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
