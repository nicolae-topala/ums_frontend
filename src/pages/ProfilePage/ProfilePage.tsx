import React, { useState } from 'react';

//UI
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Input } from 'ui/atoms/Input/Input';
import { Button } from 'ui/atoms/Button/Button';

import { useProfileMenu } from 'hooks/useProfileMenu';

import './ProfilePage.scss';

export const ProfilePage = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [pageValue, setPageValue] = useState('change-email');
  const menu = useProfileMenu();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  return (
    <Layout>
      <div className="change-email-page">
        <div className="change-email-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>
        {pageValue == 'change-email' ? (
          <div className="change-email">
            <div className="change-email__title">Schimbă adresa de email</div>
            <div className="change-email__description">
              <p>
                Pe aceasta pagină puteţi să vă schimbaţi adresa de email din
                contul UMS Web. Veţi putea utiliza noua adresă de email în cazul
                în care doriţi să vă resetaţi parola în aplicaţia UMS Web.
              </p>
              <p>Adresa de email curentă: {email}</p>
              <p>
                Introduceţi adresa nouă de email:{' '}
                <Input onChange={setEmail} className="change-email__input" />
              </p>
              <Button text="Schimbă" className="change-email__button" />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'change-password' ? (
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
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
