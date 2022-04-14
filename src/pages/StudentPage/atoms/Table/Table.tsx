import React from 'react';

import { Props } from './table.types';
import './Table.scss';

export const Table: React.FC<Props> = ({
  className = '',
  caption = '',
  tableData,
  errorMessage,
}): React.ReactElement => {
  return (
    <>
      <table className={`${className} table-student`}>
        <caption onClick={() => console.log(tableData)}>{caption}</caption>
        <tbody>
          {tableData?.map((data) => (
            <tr key={data.name}>
              <td className="name">{data.name}</td>
              <td className="value">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
