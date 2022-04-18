import React from 'react';

import { Props } from './tableCurriculum.types';
import './TableCurriculum.scss';

export const TableCurriculum: React.FC<Props> = ({
  className = '',
  caption = '',
  tableData,
  errorMessage,
}): React.ReactElement => {
  return (
    <>
      <div className="table-curriculum">
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
              <tr key={data.code}>
                <td>{data.code}</td>
                <td>{data.name}</td>
                <td>{data.ects}</td>
                <td>{data.category}</td>
                <td>{data.weeksNumber}</td>
                <td>{data.examinationForm}</td>
                <td>{data.minimumGrade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
