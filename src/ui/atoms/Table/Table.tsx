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
                  <th>GET name</th>
                  <th>GET name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="value">GET value</span>
                  </td>
                  <td>
                    <span className="value">GET value</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="value">GET value</span>
                  </td>
                  <td>
                    <span className="value">GET value</span>
                  </td>
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
                <td>
                  <span className="name">GET name</span>
                </td>
                <td>
                  <span className="value">GET value</span>
                </td>
              </tr>
            </tbody>
          </table>
          {errorMessage && <p>{errorMessage}</p>}
        </>
      )}
    </>
  );
};
