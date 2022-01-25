import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'resources/icons/icons';
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';

import './LoginPage.scss';

export const LoginPage = (): React.ReactElement => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstLogIn, setFirstLogIn] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();

  const goToResetPage = (): void => {
    navigate('/reset-password');
  };

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Salut, autentifică-te</div>
        <div className="login__items__row">
          <Input
            value={username}
            placeholder="Cont"
            className="login__items__input"
            onChange={setUserName}
          />
          <Icon
            type="question"
            className="login__items__icon"
            onClick={() => setFirstLogIn(!firstLogIn)}
          />
        </div>
        <div className="login__items__row">
          <Input
            value={password}
            placeholder="Parolă"
            type={seePassword ? 'text' : 'password'}
            className="login__items__input"
            onChange={setPassword}
          />
          <Icon
            type="password"
            className="login__items__icon"
            onClick={() => setSeePassword(!seePassword)}
          />
        </div>
        <Button className="login__items__button" text="Autentificare" />
        <Button
          className="login__items__button__forgot"
          text="Resetare Parolă"
          onClick={() => goToResetPage()}
        />
      </div>
      {firstLogIn ? (
        <div className="login__details">
          <div className="login__details__paragraph">
            <p>
              <span>
                Prima logare pe aceasta platforma pentru studentii romani se
                face cu ajutorul CNP-ului
              </span>
            </p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Exemplu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Cont:</span> CNP
                  </td>
                  <td>
                    <span>Cont:</span> 2750216232323
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Parola:</span> data nasterii (ZZ-LL-AAAA)
                  </td>
                  <td>
                    <span>Parola:</span> 16-02-1975
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="login__details__paragraph">
            <p>
              <span>
                Pentru studentii straini se va folosi NUMARUL MATRICOL
              </span>
            </p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Exemplu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Cont:</span> Nr. matricol
                  </td>
                  <td>
                    <span>Cont:</span> 112345
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Parola:</span> data nasterii (ZZ-LL-AAAA)
                  </td>
                  <td>
                    <span>Parola:</span> 16-02-1975
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="login__details__paragraph">
            <p>
              <span>
                ATENŢIE! După prima logare, vă rugăm să vă activaţi contul. În
                urma parcurgerii etapelor de activare cont, logarea se va face
                cu ajutorul noului utilizator. Nu se va mai folosi
                CNP-ul/Numărul matricol. Etapele pentru activarea contului le
                gasiţi aici:
                <a
                  href="http://anunturi.uab.ro/index.php?a=157"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Anunţuri UAB
                </a>
              </span>
            </p>
            <p>
              <span>Cont:</span> noul cont obţinut în urma parcurgerii etapelor
              de activare cont
              <br /> <span>Parola:</span> data nasterii (ZZ-LL-AAAA)
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
