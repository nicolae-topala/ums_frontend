import React from 'react';

import { Icon } from 'resources/icons/icons';

import './ContactInfo.scss';

interface Props {
  title: string;
  photo: string;
  url: string;
  alt?: string;
  address?: string[];
  phone?: string[];
  email?: string[];
}

export const ContactInfo: React.FC<Props> = ({
  title,
  photo,
  url,
  alt = 'Photo',
  address,
  phone,
  email,
}): React.ReactElement => {
  return (
    <div className="element">
      <a href={url}>
        <img className="element__image" src={photo} alt={alt} />
      </a>
      <p className="element__title">{title}</p>
      <table className="element__contacts">
        <tbody>
          {address
            ? address.map((item) => (
                <tr key={item} className="element__contacts__info">
                  <td className="element__contacts__info__details">
                    <span className="icon">
                      <Icon type="address" />
                    </span>
                    <span>Adresa</span>
                  </td>
                  <td>
                    <p>{item}</p>
                  </td>
                </tr>
              ))
            : ''}
          {phone
            ? phone.map((item) => (
                <tr key={item} className="element__contacts__info">
                  <td className="element__contacts__info__details">
                    <span className="icon">
                      <Icon type="phone" />
                    </span>
                    <span>Telefon</span>
                  </td>
                  <td>
                    <p>{item}</p>
                  </td>
                </tr>
              ))
            : ''}
          {email
            ? email.map((item) => (
                <tr key={item} className="element__contacts__info">
                  <td className="element__contacts__info__details">
                    <span className="icon">
                      <Icon type="email" />
                    </span>
                    <span>Email</span>
                  </td>
                  <td>
                    <p>{item}</p>
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </div>
  );
};
