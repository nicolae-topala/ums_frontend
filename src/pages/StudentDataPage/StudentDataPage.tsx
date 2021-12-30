import React from 'react';

import { Layout } from 'ui/organisms/Layout/Layout';
import { StudentMenu } from 'ui/molecules/StudentMenu/StudentMenu';

import './StudentDataPage.scss';

export const StudentDataPage = (): React.ReactElement => {
  return (
    <Layout>
      <div className="student-data-page">
        <div className="student-data-page__menu">
          <StudentMenu />
        </div>
        <div className="student-data">
          <div className="student-data__title">Date student</div>
          <div className="student-data__description">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="student-data__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-data__value">GET value</span>
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
