import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';

//hooks
import { useFinancialMenu } from 'hooks/useFinancialMenu';

import './FinancialPage.scss';

export const FinancialPage = (): React.ReactElement => {
  const menu = useFinancialMenu();

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Layout>
      <div className="financial-page">
        <div className="financial-page__menu">
          <Menu menu={menu} />
        </div>
        <div className="financial">
          <div className="financial__title">Info financiar</div>
          <div className="financial__description">
            <div className="financial__container">
              <span>An universitar</span>
              <Select
                className="financial__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <span>Sold ani anteriori 0</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
