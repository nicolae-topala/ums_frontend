import React, { useState } from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

import './FinancialPage.scss';
//import { Table } from 'ui/atoms/Table/Table';

export const FinancialPage = (): React.ReactElement => {
  const menu = useFinancialMenu();
  const [pageValue, setPageValue] = useState('financial');

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="financial-page">
        <div className="financial-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>
        {pageValue == 'financial' ? (
          <div className="financial">
            <div className="financial__title">Info financiar</div>
            <div className="financial__description">
              <div className="financial__container">
                <p>An universitar</p>
                <Select
                  className="financial__container__input"
                  options={options}
                  isSearchable={false}
                />
              </div>
              <p>Sold ani anteriori 0</p>
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'payments' ? (
          <div className="financial">
            <div className="financial__title">Documente plată</div>
            <div className="financial__description">
              <div className="financial__container">
                <p>An universitar</p>
                <Select
                  className="financial__container__input"
                  options={options}
                  isSearchable={false}
                />
              </div>
              <span>tabel Plăţi confirmate</span>
              <span>tabel Plăţi electronice inactive</span>
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
                <p>An universitar</p>
                <Select
                  className="financial__container__input"
                  options={options}
                  isSearchable={false}
                />
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
