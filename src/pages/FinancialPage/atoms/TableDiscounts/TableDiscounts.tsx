import React from 'react';

import { Props } from './tableDiscounts.types';
import './TableDiscounts.scss';

export const TableDiscounts: React.FC<Props> = ({
  className = '',
  caption = '',
  tableData,
  errorMessage,
}): React.ReactElement => {
  return (
    <>
      <div className=" table-discounts">
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
              <tr key={data.discounts_id}>
                <td className="value">{data.discounts_details}</td>
                <td className="value">{data.discounts_discountAmmount}</td>
                <td className="value">{data.discounts_taxType}</td>
                <td className="value">
                  {new Date(data.discounts_date).toISOString().slice(0, 10)}
                </td>
                <td className="value">{data.discounts_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
