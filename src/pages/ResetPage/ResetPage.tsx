import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'resources/icons/icons';
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';

import './ResetPage.scss';

export const ResetPage = (): React.ReactElement => {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const goToLoginPage = (): void => {
    navigate('/login');
  };

  return (
    <div className="reset">
      <div className="reset__items">
        <div className="reset__items__title">Resetare parolă</div>
        <div className="reset__items__description">
          <p>Pentru resetarea parolei completaţi contul.</p>{' '}
          <p>Veţi primi un email la adresa asociată contului. </p>
          <p>Verificaţi email-ul şi urmaţi instrucţiunile!</p>
        </div>
        <Input
          value={username}
          placeholder="Cont"
          className="reset__items__input"
          onChange={setUserName}
        />
        <div className="reset__items__row">
          <Button className="reset__items__button" text="Resetare Parolă" />
          <Button
            className="reset__items__button__forgot"
            text="Renunță"
            onClick={() => goToLoginPage()}
          />
        </div>
      </div>
    </div>
  );
};
