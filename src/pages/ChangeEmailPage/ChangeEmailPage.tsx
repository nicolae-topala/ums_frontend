import React from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';
import { ProfileMenu } from 'ui/molecules/ProfileMenu/ProfileMenu';

import './ChangeEmailPage.scss';

export const ChangeEmailPage = (): React.ReactElement => {
  return (
    <Layout>
      <div className="change-email-page">
        <div className="change-email-page__menu">
          <ProfileMenu />
        </div>
        <div className="change-email">
          <div className="change-email__title">Change Email</div>
          <div className="change-email__description">Change Email</div>
        </div>
      </div>
    </Layout>
  );
};
