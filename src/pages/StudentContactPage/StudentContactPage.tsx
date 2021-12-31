import React from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

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
            <table>
              <caption>Domiciliul stabil</caption>
              <tbody>
                <tr>
                  <td>
                    <span className="student-contact__name">GET name</span>
                  </td>
                  <td>
                    <span className="student-contact__value">GET value</span>
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
