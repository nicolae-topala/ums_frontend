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
      <div className=" table-curriculum">
        <table className={`${className}`}>
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
              <tr key={data.code}>
                <td className="value">{data.code}</td>
                <td className="value">{data.name}</td>
                <td className="value">{data.ects}</td>
                <td className="value">{data.category}</td>
                <td className="value">{data.weeksNumber}</td>
                <td className="value">{data.examinationForm}</td>
                <td className="value">{data.minimumGrade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
