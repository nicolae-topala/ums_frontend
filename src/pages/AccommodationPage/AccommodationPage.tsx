import React from 'react';
import Select from 'react-select';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Table } from 'ui/atoms/Table/Table';

import './AccommodationPage.scss';

export const AccommodationPage = (): React.ReactElement => {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  const options2 = [
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  return (
    <Layout>
      <div className="accommodation-page">
        <div className="accommodation">
          <div className="accommodation__title">Vizualizare opţiuni</div>
          <div className="accommodation__description">
            <div className="accommodation__container">
              <span>An universitar</span>
              <Select
                className="accommodation__container__input"
                options={options}
                isSearchable={false}
              />
            </div>
            <div className="accommodation__container">
              <span>Sesiune</span>
              <Select
                className="accommodation__container__input"
                options={options2}
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
