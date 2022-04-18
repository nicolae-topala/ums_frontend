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
      <div className="table-payments">
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
              <tr key={data.invoices_number}>
                <td>{data.invoices_series}</td>
                <td>{data.invoices_number}</td>
                <td>{data.invoices_currencyType}</td>
                <td>{data.payments_ammountPaid}</td>
                <td>{data.invoices_type}</td>
                <td>{data.courses_name}</td>
                <td>
                  {new Date(data.invoices_date).toISOString().slice(0, 10)}
                </td>
                <td>{data.payments_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
