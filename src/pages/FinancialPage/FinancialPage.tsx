import React, { useEffect, useState } from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

// libs
import { financial } from 'libs/http/Financial/financial';
import { getPayments } from 'libs/http/Financial/financial.types';

import './FinancialPage.scss';
import { TablePayments } from './atoms/TablePayments/TablePayments';

export const FinancialPage = (): React.ReactElement => {
  const menu = useFinancialMenu();
  const [pageValue, setPageValue] = useState('payments');
  const [tableData, setTableData] = useState<getPayments[]>([]);
  const [tableReady, setTableReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await financial.getPayments();
      setTableData(data);
    };
    try {
      fetchData();
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (Object.entries(tableData).length === 0) setTableReady(false);
    else {
      setTableReady(true);
    }
  }, [tableData]);

  return (
    <Layout>
      <div className="financial-page">
        <div className="financial-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>
        {pageValue == 'payments' ? (
          <div className="financial">
            <div className="financial__title">Documente plată</div>
            <div className="financial__description">
              <div className="financial__container"></div>
              {tableReady ? (
                <TablePayments
                  tableData={{
                    headers: [
                      { key: 'invoices_series', label: 'Seria' },
                      { key: 'invoices_number', label: 'Număr' },
                      { key: 'invoices_currencyType', label: 'Tip monedă' },
                      { key: 'payments_ammountPaid', label: 'Total achitat' },
                      { key: 'invoices_type', label: 'Tip' },
                      { key: 'courses_name', label: 'Curs' },
                      { key: 'invoices_date', label: 'Data' },
                      { key: 'payments_status', label: 'Status' },
                    ],
                    values: tableData,
                  }}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'discounts' ? (
          <div className="financial">
            <div className="financial__title">Reduceri</div>
            <div className="financial__description">
              <div className="financial__container"></div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
