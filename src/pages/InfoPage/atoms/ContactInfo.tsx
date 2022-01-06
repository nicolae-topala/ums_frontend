import React from 'react';

import { Icon } from 'resources/icons/icons';

import './ContactInfo.scss';

interface Props {
  className?: string;
  top?: string;
  height?: string;
  width?: string;
  title?: string;
  photo?: string;
  url?: string;
  alt?: string;
  address?: string[];
  phone?: string[];
  email?: string[];
}

export const ContactInfo: React.FC<Props> = ({
  className,
  top,
  height,
  width,
  title,
  photo,
  url,
  alt = 'Photo',
  address,
  phone,
  email,
}): React.ReactElement => {
  return (
    <div
      className={`element ${className}`}
      style={{ height: height ? height : '', width: width ? width : '' }}
    >
      {photo ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="element__image" src={photo} alt={alt} />
        </a>
      ) : null}
      {title ? <p className="element__title">{title}</p> : null}
      <table className="element__contacts" style={{ top: top ? top : '' }}>
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
            : null}
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
            : null}
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
            : null}
        </tbody>
      </table>
    </div>
  );
};
