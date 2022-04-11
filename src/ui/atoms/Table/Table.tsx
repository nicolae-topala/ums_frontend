import React from 'react';

import './Table.scss';

interface dataType {
  name: string;
  value: string;
}

interface allData {
  allData?: dataType[];
}

interface Props {
  className?: string;
  caption?: string;
  tableData?: allData;
  errorMessage?: string;
  large?: boolean;
}

export const Table: React.FC<Props> = ({
  className = '',
  caption = '',
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
          <div>
            <table className={`table-small ${className}`}>
              <caption onClick={() => console.log(tableData)}>
                {caption}
              </caption>
              <tbody>
                {tableData?.allData?.map((data: dataType) => (
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
