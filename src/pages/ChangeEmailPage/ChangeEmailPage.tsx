import React, { useState } from 'react';

//UI
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Input } from 'ui/atoms/Input/Input';
import { Button } from 'ui/atoms/Button/Button';

import { useProfileMenu } from 'hooks/useProfileMenu';

import './ChangeEmailPage.scss';

export const ChangeEmailPage = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const menu = useProfileMenu();

  return (
    <Layout>
      <div className="change-email-page">
        <div className="change-email-page__menu">
          <Menu menu={menu} />
        </div>
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
      </div>
    </Layout>
  );
};
