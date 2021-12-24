import React from 'react';
import { ProfileMenu } from 'ui/molecules/ProfileMenu/ProfileMenu';
import { Layout } from 'ui/organisms/Layout/Layout';

import './ChangePasswordPage.scss';

export const ChangePasswordPage = (): React.ReactElement => {
  return (
    <Layout>
      <div className="change-password-page">
        <div className="change-password-page__menu">
          <ProfileMenu />
        </div>
        <div className="change-password">
          <div className="change-password__title">Change Password</div>
          <div className="change-password__description">Change Password</div>
        </div>
      </div>
    </Layout>
  );
};
