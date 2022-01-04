import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

import './PaymentsPage.scss';

export const PaymentsPage = (): React.ReactElement => {
  const menu = useFinancialMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="payments-page">
        <div className="payments-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="payments">
          <div className="payments__title">Documente plată</div>
          <div className="payments__description">
            <div className="payments__container">
              <p>An universitar</p>
              <Select
                className="payments__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <Table caption="Plăţi confirmate" large />
            <Table caption="Plăţi electronice inactive" large />
          </div>
        </div>
      </div>
    </Layout>
  );
};
