import React from 'react';

import './Table.scss';

interface dataType {
  name: string;
  value: string;
}

interface Props {
  className?: string;
  caption?: string;
  data?: dataType[];
  errorMessage?: string;
  large?: boolean;
}

export const Table: React.FC<Props> = ({
  className = '',
  caption = '',
  data,
  errorMessage,
  large,
}): React.ReactElement => {
  return (
    <>
      {large ? (
        <>
          <div className={`${large ? 'table-large' : ''}`}>
            <table className={`${className}`}>
              <caption>{caption}</caption>
              <thead>
                <tr>
                  <th className="name">GET name</th>
                  <th className="name">GET name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="value">GET value</td>
                  <td className="value">GET value</td>
                </tr>
                <tr>
                  <td className="value">GET value</td>
                  <td className="value">GET value</td>
                </tr>
              </tbody>
            </table>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </>
      ) : (
        <>
          <table className={`${className}`}>
            <caption>{caption}</caption>
            <tbody>
              <tr>
                <td className="name">GET name</td>
                <td className="value">GET value</td>
              </tr>
            </tbody>
          </table>
          {errorMessage && <p>{errorMessage}</p>}
        </>
      )}
    </>
  );
};
