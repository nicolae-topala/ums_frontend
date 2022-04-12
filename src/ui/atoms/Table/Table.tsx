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
                  {tableData?.allData?.map((data: dataType) => (
                    <td className="name" key={data.name}>
                      {data.name}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {tableData?.allData?.map((data: dataType) => (
                    <td className="value" key={data.name}>
                      {data.value}
                    </td>
                  ))}
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
