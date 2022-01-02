import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

import './DiscountsPage.scss';

export const DiscountsPage = (): React.ReactElement => {
  const menu = useFinancialMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="discounts-page">
        <div className="discounts-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="discounts">
          <div className="discounts__title">Reduceri</div>
          <div className="discounts__description">
            <div className="discounts__container">
              <span>An universitar</span>
              <Select
                className="discounts__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <Table large />
          </div>
        </div>
      </div>
    </Layout>
  );
};
