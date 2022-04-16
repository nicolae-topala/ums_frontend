import React, { useEffect, useState } from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

// libs
import { financial } from 'libs/http/Financial/financial';
import { getDiscounts, getPayments } from 'libs/http/Financial/financial.types';

import './FinancialPage.scss';
import { TablePayments } from './atoms/TablePayments/TablePayments';
import { TableDiscounts } from './atoms/TableDiscounts/TableDiscounts';

export const FinancialPage = (): React.ReactElement => {
  const menu = useFinancialMenu();
  const [pageValue, setPageValue] = useState('payments');

  // Payments
  const [tableDataPayments, setTableDataPayments] = useState<getPayments[]>([]);
  const [tableReadyPayments, setTableReadyPayments] = useState(false);

  // Discounts
  const [tableDataDiscounts, setTableDataDiscounts] = useState<getDiscounts[]>(
    []
  );
  const [tableReadyDiscounts, setTableReadyDiscounts] = useState(false);

  useEffect(() => {
    const fetchDataPayments = async () => {
      const { data } = await financial.getPayments();
      setTableDataPayments(data);
    };

    const fetchDataDiscounts = async () => {
      const { data } = await financial.getDiscounts();
      setTableDataDiscounts(data);
    };

    try {
      fetchDataPayments();
      fetchDataDiscounts();
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (Object.entries(tableDataPayments).length === 0)
      setTableReadyPayments(false);
    else {
      setTableReadyPayments(true);
    }
  }, [tableDataPayments]);

  useEffect(() => {
    if (Object.entries(tableDataDiscounts).length === 0)
      setTableReadyDiscounts(false);
    else {
      setTableReadyDiscounts(true);
    }
  }, [tableDataDiscounts]);

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
              {tableReadyPayments ? (
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
                    values: tableDataPayments,
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
              <div className="financial__container">
                {tableReadyDiscounts ? (
                  <TableDiscounts
                    tableData={{
                      headers: [
                        { key: 'discounts_details', label: 'Detalii' },
                        { key: 'discounts_discountAmmount', label: 'Suma' },
                        { key: 'discounts_taxType', label: 'Tip taxă' },
                        { key: 'discounts_date', label: 'Data' },
                        { key: 'discounts_status', label: 'Status' },
                      ],
                      values: tableDataDiscounts,
                    }}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
