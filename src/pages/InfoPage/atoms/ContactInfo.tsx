import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'resources/icons/icons';

import './ContactInfo.scss';

interface Props {
  title: string;
  photo: string;
  url: string;
  alt?: string;
  address?: string;
  phone?: string;
  phone2?: string;
  email?: string;
  email2?: string;
}

export const ContactInfo: React.FC<Props> = ({
  title,
  photo,
  url,
  alt = 'Photo',
  address,
  phone,
  phone2,
  email,
  email2,
}): React.ReactElement => {
  const navigate = useNavigate();

  const goToPage = (route: string): void => {
    navigate(route);
  };
  return (
    <div className="element">
      <img
        className="element__image"
        src={photo}
        alt={alt}
        onClick={() => goToPage(url)}
      />
      <p className="element__title">{title}</p>
      <table className="element__contacts">
        <tbody>
          {address ? (
            <tr className="element__contacts__info">
              <td>
                <span className="icon">
                  <Icon type="address" />
                </span>
                <span>Adresa</span>
              </td>
              <td>
                <p>{address}</p>
              </td>
            </tr>
          ) : (
            ''
          )}
          {phone ? (
            <tr className="element__contacts__info">
              <td>
                <span className="icon">
                  <Icon type="phone" />
                </span>
                <span>Telefon</span>
              </td>
              <td>
                <p>{phone}</p>
              </td>
            </tr>
          ) : (
            ''
          )}
          {phone2 ? (
            <tr className="element__contacts__info">
              <td>
                <span className="icon">
                  <Icon type="phone" />
                </span>
                <span>Telefon</span>
              </td>
              <td>
                <p>{phone2}</p>
              </td>
            </tr>
          ) : (
            ''
          )}
          {email ? (
            <tr className="element__contacts__info">
              <td>
                <span className="icon">
                  <Icon type="email" />
                </span>
                <span>Email</span>
              </td>
              <td>
                <p>{email}</p>
              </td>
            </tr>
          ) : (
            ''
          )}
          {email2 ? (
            <tr className="element__contacts__info">
              <td>
                <span className="icon">
                  <Icon type="email" />
                </span>
                <span>Email</span>
              </td>
              <td>
                <p>{email2}</p>
              </td>
            </tr>
          ) : (
            ''
          )}
        </tbody>
      </table>
    </div>
  );
};
