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
      <div className="table-grades">
        <table className={`${className}`}>
          <caption>{caption}</caption>
          <thead>
            <tr>
              {tableData?.headers.map((data) => (
                <td key={data.key}>{data.label}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.values.map((data) => (
              <tr key={data.courses_code}>
                <td>{data.courses_name}</td>
                <td>{data.finalGrade}</td>
                <td>{data.courses_ects}</td>
                <td>{data.courses_category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
