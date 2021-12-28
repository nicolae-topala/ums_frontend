import React, { useState } from 'react';

//UI
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';
import { ProfileMenu } from 'ui/molecules/ProfileMenu/ProfileMenu';
import { Layout } from 'ui/organisms/Layout/Layout';

import './ChangePasswordPage.scss';

export const ChangePasswordPage = (): React.ReactElement => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  return (
    <Layout>
      <div className="change-password-page">
        <div className="change-password-page__menu">
          <ProfileMenu />
        </div>
        <div className="change-password">
          <div className="change-password__title">Schimbă Parola</div>
          <div className="change-password__description">
            <table>
              <tr>
                <td>
                  <span>Parolă veche:</span>
                </td>
                <td>
                  <Input
                    type="password"
                    className="change-password__input"
                    onChange={setOldPassword}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Parolă nouă (max. 12 caractere):</span>
                </td>
                <td>
                  <Input
                    type="password"
                    className="change-password__input"
                    onChange={setNewPassword}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Confirmare parolă nouă (max. 12 caractere):</span>
                </td>
                <td>
                  <Input
                    type="password"
                    className="change-password__input"
                    onChange={setRepeatNewPassword}
                  />
                </td>
              </tr>
            </table>
            <Button className="change-password__button" text="Confirmă" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
