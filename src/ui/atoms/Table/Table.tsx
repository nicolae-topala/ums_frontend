import React from 'react';

import { Props } from './table.types';
import './Table.scss';

export const Table: React.FC<Props> = ({
  className = '',
  caption = '',
  largeTableData,
  tableData,
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
                  {largeTableData?.headers.map((data) => (
                    <td className="name" key={data.key}>
                      {data.label}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {largeTableData?.values.map((data) => (
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
          </div>
        </>
      ) : (
        <>
          <div>
            <table className={`table-small ${className}`}>
              <caption onClick={() => console.log(tableData)}>
                {caption}
              </caption>
              <tbody>
                {tableData?.allData.map((data) => (
                  <tr key={data.name}>
                    <td className="name">{data.name}</td>
                    <td className="value">{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </>
      )}
    </>
  );
};
