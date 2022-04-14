import React from 'react';

import { Props } from './tableGrades.types';
import './TableGrades.scss';

export const TableGrades: React.FC<Props> = ({
  className = '',
  caption = '',
  tableData,
  errorMessage,
}): React.ReactElement => {
  return (
    <>
      <table className={`${className} table-grades`}>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {tableData?.headers.map((data) => (
              <td className="name" key={data.key}>
                {data.label}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.values.map((data) => (
            <tr key={data.courses_code}>
              <td className="value">{data.courses_name}</td>
              <td className="value">{data.finalGrade}</td>
              <td className="value">{data.courses_ects}</td>
              <td className="value">{data.courses_category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
