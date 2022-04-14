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
      <table className={`${className} table-curriculum`}>
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
              <td className="value">{data.category}</td>
              <td className="value">{data.ects}</td>
              <td className="value">{data.examinationForm}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
