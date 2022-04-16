import React from 'react';

import { Props } from './tablePayments.types';
import './TablePayments.scss';

export const TablePayments: React.FC<Props> = ({
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
              <tr key={data.invoices_number}>
                <td className="value">{data.invoices_series}</td>
                <td className="value">{data.invoices_number}</td>
                <td className="value">{data.invoices_currencyType}</td>
                <td className="value">{data.payments_ammountPaid}</td>
                <td className="value">{data.invoices_type}</td>
                <td className="value">{data.courses_name}</td>
                <td className="value">
                  {new Date(data.invoices_date).toISOString().slice(0, 10)}
                </td>
                <td className="value">{data.payments_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
