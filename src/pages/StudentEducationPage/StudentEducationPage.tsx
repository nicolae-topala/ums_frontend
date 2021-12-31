import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

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
            <table>
              <caption>Informaţii şcolaritate</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="student-education__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-education__value">GET value</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <caption>Context şcolaritate</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="student-education__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-education__value">GET value</span>
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
