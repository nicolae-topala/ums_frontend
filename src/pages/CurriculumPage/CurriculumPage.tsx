import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

// ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

// hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

// libs
import { curriculum } from 'libs/http/Curriculum/curriculum';
import { getCurriculum } from 'libs/http/Curriculum/curriculum.types';

import './CurriculumPage.scss';

export const CurriculumPage = (): React.ReactElement => {
  const menu = useGradesMenu();
  const [pageValue, setPageValue] = useState('curriculum');

  const year = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
  ];
  const semester = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
  ];

  const [data, setData] = useState([{}]);
  const [selectedYear, setSelectedYear] = useState<number>();
  const [selectedSemester, setSelectedSemester] = useState<number>();
  const [tableData, setTableData] = useState({});
  const [tableReady, setTableReady] = useState(false);

  const checkYear = (event: SingleValue<{ value: number }>) => {
    const value = event?.value;
    setSelectedYear(value);
  };

  const checkSemester = (event: SingleValue<{ value: number }>) => {
    const value = event?.value;
    setSelectedSemester(value);
  };

  useEffect(() => {
    if (selectedYear && selectedSemester) {
      let data1 = {};
      data.map((thisData: getCurriculum) => {
        if (
          thisData.yearNumber == selectedYear &&
          thisData.semesterNumber == selectedSemester
        ) {
          data1 = {
            allData: [
              { name: 'Cod', value: thisData.code },
              { name: 'Denumire', value: thisData.name },
              { name: 'Categorie', value: thisData.category },
              { name: 'Nr. Credite', value: thisData.ects },
            ],
          };
        }
      });
      // check if data1 object is not empty
      if (Object.entries(data1).length === 0) setTableReady(false);
      else {
        setTableReady(true);
        setTableData(data1);
      }
    }
  }, [selectedYear, selectedSemester]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await curriculum.getCurriculum();
      setData(data);
    };

    try {
      fetchData();
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  return (
    <Layout>
      <div className="curriculum-page">
        <div className="curriculum-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>

        {pageValue == 'curriculum' ? (
          <div className="curriculum">
            <div className="curriculum__title">Discipline</div>
            <div className="curriculum__description">
              <p>Facultatea de Ştiinţe Exacte şi Inginereşti</p>
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={year}
                  onChange={checkYear}
                  isSearchable={false}
                />
              </div>
              <div className="curriculum__container">
                <p>Semestru</p>
                <Select
                  className="curriculum__container__input"
                  options={semester}
                  onChange={checkSemester}
                  isSearchable={false}
                />
              </div>
              {tableReady ? <Table large tableData={tableData} /> : ''}
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'grades' ? (
          <div className="curriculum">
            <div className="curriculum__title">Note</div>
            <div className="curriculum__description">
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={year}
                  isSearchable={false}
                />
              </div>
              <div className="curriculum__container">
                <p>Semestru</p>
                <Select
                  className="curriculum__container__input"
                  options={semester}
                  isSearchable={false}
                />
              </div>
              <Table large />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'electives' ? (
          <div className="curriculum">
            <div className="curriculum__title">Discipline opţionale</div>
            <div className="curriculum__description">
              <div className="curriculum__container">
                <p>An universitar</p>
                <Select
                  className="curriculum__container__input"
                  options={year}
                  isSearchable={false}
                />
              </div>
              <div className="curriculum__container">
                <p>Semestru</p>
                <Select
                  className="curriculum__container__input"
                  options={semester}
                  isSearchable={false}
                />
              </div>
              <Table large />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
