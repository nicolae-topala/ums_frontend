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
}

export const Table: React.FC<Props> = ({
  className = '',
  caption = '',
  data,
  errorMessage,
}): React.ReactElement => {
  return (
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
  );
};
