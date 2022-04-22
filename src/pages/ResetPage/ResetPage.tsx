import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { profile } from 'libs/http/Profile/profile';

import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';

import { UserContext } from 'context/UserContext';
import './ResetPage.scss';
import { save } from 'react-cookies';
import { axiosHeadersUpdater } from 'libs/http/axios';

export const ResetPage = (): React.ReactElement => {
  const [username, setUserName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { setIsUserLogged } = React.useContext(UserContext);

  const { token } = useParams();

  const navigate = useNavigate();

  const goToLoginPage = (): void => {
    navigate('/login');
  };

  const onForgotPassword = async () => {
    try {
      if (isSending) return;
      setIsSending(true);

      await profile.forgotPassword({
        username,
      });

      setIsSending(false);
      setError('An email was sent to you with the recvovery link!');
    } catch (e: any) {
      setIsSending(false);
      setError(e.response.data);
    }
  };

  const onResetPassword = async () => {
    try {
      if (isSending) return;
      setIsSending(true);

      const { data } = await profile.resetPassword({
        token,
        password,
        passwordConfirm,
      });

      if (data?.accessToken && data?.refreshToken) {
        save('accessToken', data.accessToken, { path: '/' });
        save('refreshToken', data.refreshToken, { path: '/' });
        axiosHeadersUpdater();

        setIsUserLogged(true);
        navigate('/');
      }
      setIsSending(false);
      navigate('/login');
    } catch (e: any) {
      setIsSending(false);
      setError(e.response.data);
    }
  };

  return (
    <div className="reset">
      <div className="reset__items">
        <div className="reset__items__title">Resetare parolă</div>
        {token ? (
          <>
            <Input
              value={password}
              placeholder="Parolă nouă"
              onChange={setPassword}
            />
            <Input
              value={passwordConfirm}
              placeholder="Repetă parola"
              className="reset__password__input"
              onChange={setPasswordConfirm}
            />
            {error ? (
              <div className="reset__items__success">
                <span>{error}</span>
              </div>
            ) : null}
            <Button
              className="reset__password__button"
              text="Resetare Parolă"
              disabled={isSending}
              onClick={() => onResetPassword()}
            />
          </>
        ) : (
          <>
            <div className="reset__items__description">
              <p>Pentru resetarea parolei completaţi contul.</p>
              <p>Veţi primi un email la adresa asociată contului. </p>
              <p>Verificaţi email-ul şi urmaţi instrucţiunile!</p>
            </div>
            <Input
              value={username}
              placeholder="Cont"
              className="reset__items__input"
              onChange={setUserName}
            />
            {error ? (
              <div className="reset__items__success">
                <span>{error}</span>
              </div>
            ) : null}
            <div className="reset__items__row">
              <Button
                className="reset__items__button"
                text="Resetare Parolă"
                disabled={isSending}
                onClick={() => onForgotPassword()}
              />
              <Button
                className="reset__items__button__forgot"
                text="Renunță"
                onClick={() => goToLoginPage()}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
