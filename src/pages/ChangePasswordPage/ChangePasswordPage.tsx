import React, { useState } from 'react';

//UI
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Layout } from 'ui/organisms/Layout/Layout';

//Hooks
import { useProfileMenu } from 'hooks/useProfileMenu';

import './ChangePasswordPage.scss';

export const ChangePasswordPage = (): React.ReactElement => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const menu = useProfileMenu();

  return (
    <Layout>
      <div className="change-password-page">
        <div className="change-password-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="change-password">
          <div className="change-password__title">Schimbă Parola</div>
          <div className="change-password__description">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Parolă veche:</p>
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
                    <p>Parolă nouă (max. 12 caractere):</p>
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
                    <p>Confirmare parolă nouă (max. 12 caractere):</p>
                  </td>
                  <td>
                    <Input
                      type="password"
                      className="change-password__input"
                      onChange={setRepeatNewPassword}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <Button className="change-password__button" text="Confirmă" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
