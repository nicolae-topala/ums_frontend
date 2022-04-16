import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

// ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { TableCurriculum } from './atoms/TableCurriculum/TableCurriculum';
import { TableGrades } from './atoms/TableGrades/TableGrades';

// hooks
import { useGradesMenu } from 'hooks/useGradesMenu';

// libs
import { curriculum } from 'libs/http/Curriculum/curriculum';
import { getCurriculum } from 'libs/http/Curriculum/curriculum.types';
import { getGrades } from 'libs/http/Curriculum/grades.types';

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

  // Curriculum states
  const [dataCurriculum, setDataCurriculum] = useState<getCurriculum[]>([]);
  const [selectedYearCurriculum, setSelectedYearCurriculum] =
    useState<number>();
  const [selectedSemesterCurriculum, setSelectedSemesterCurriculum] =
    useState<number>();
  const [tableDataCurriculum, setTableDataCurriculum] = useState<
    getCurriculum[]
  >([]);
  const [tableReadyCurriculum, setTableReadyCurriculum] = useState(false);

  // Grades states
  const [dataGrades, setDataGrades] = useState<getGrades[]>([]);
  const [tableDataGrades, setTableDataGrades] = useState<getGrades[]>([]);
  const [selectedYearGrades, setSelectedYearGrades] = useState<number>();
  const [selectedSemesterGrades, setSelectedSemesterGrades] =
    useState<number>();
  const [tableReadyGrades, setTableReadyGrades] = useState(false);

  const setState = (
    event: SingleValue<{ value: number }>,
    state: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => {
    const value = event?.value;
    if (value) state(value);
  };

  useEffect(() => {
    if (selectedYearCurriculum && selectedSemesterCurriculum) {
      const collectData: getCurriculum[] = [];
      dataCurriculum.map((thisData) => {
        if (
          thisData.yearNumber == selectedYearCurriculum &&
          thisData.semesterNumber == selectedSemesterCurriculum
        ) {
          collectData.push(thisData);
        }
      });
      setTableDataCurriculum(collectData);
      // check if data object is not empty
      if (Object.entries(collectData).length === 0)
        setTableReadyCurriculum(false);
      else {
        setTableReadyCurriculum(true);
      }
    }
  }, [selectedYearCurriculum, selectedSemesterCurriculum]);

  useEffect(() => {
    if (selectedYearGrades && selectedSemesterGrades) {
      const collectData: getGrades[] = [];
      dataGrades.map((thisData) => {
        if (
          thisData.courses_yearNumber == selectedYearGrades &&
          thisData.courses_semesterNumber == selectedSemesterGrades
        ) {
          collectData.push(thisData);
        }
      });
      setTableDataGrades(collectData);
      // check if data object is not empty
      if (Object.entries(collectData).length === 0) setTableReadyGrades(false);
      else {
        setTableReadyGrades(true);
      }
    }
  }, [selectedYearGrades, selectedSemesterGrades]);

  useEffect(() => {
    const fetchDataCurriculum = async () => {
      const { data } = await curriculum.getCurriculum();
      setDataCurriculum(data);
    };
    const fetchDataGrades = async () => {
      const { data } = await curriculum.getGrades();
      setDataGrades(data);
    };

    try {
      fetchDataCurriculum();
      fetchDataGrades();
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
            <div>
              <div className="curriculum__title">Discipline</div>
              <div className="curriculum__description">
                <p>Facultatea de Ştiinţe Exacte şi Inginereşti</p>
                <div className="curriculum__container">
                  <p>An universitar</p>
                  <Select
                    className="curriculum__container__input"
                    options={year}
                    onChange={(e) => setState(e, setSelectedYearCurriculum)}
                    isSearchable={false}
                  />
                </div>
                <div className="curriculum__container">
                  <p>Semestru</p>
                  <Select
                    className="curriculum__container__input"
                    options={semester}
                    onChange={(e) => setState(e, setSelectedSemesterCurriculum)}
                    isSearchable={false}
                  />
                </div>
              </div>
            </div>
            {tableReadyCurriculum ? (
              <TableCurriculum
                tableData={{
                  headers: [
                    { key: 'code', label: 'Cod' },
                    { key: 'name', label: 'Denumire' },
                    { key: 'ects', label: 'Nr. credite' },
                    { key: 'category', label: 'Categorie' },
                    { key: 'weeksNumber', label: 'Nr. săptămâni' },
                    { key: 'examinationForm', label: 'Tip examinare' },
                    { key: 'minimumGrade', label: 'Notă minimă' },
                  ],
                  values: tableDataCurriculum,
                }}
              />
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        {pageValue == 'grades' ? (
          <div className="curriculum">
            <div>
              <div className="curriculum__title">Note</div>
              <div className="curriculum__description">
                <div className="curriculum__container">
                  <p>An universitar</p>
                  <Select
                    className="curriculum__container__input"
                    options={year}
                    onChange={(e) => setState(e, setSelectedYearGrades)}
                    isSearchable={false}
                  />
                </div>
                <div className="curriculum__container">
                  <p>Semestru</p>
                  <Select
                    className="curriculum__container__input"
                    options={semester}
                    onChange={(e) => setState(e, setSelectedSemesterGrades)}
                    isSearchable={false}
                  />
                </div>
              </div>
            </div>
            <div>
              {tableReadyGrades ? (
                <TableGrades
                  tableData={{
                    headers: [
                      { key: 'courses_name', label: 'Denumire' },
                      { key: 'finalGrade', label: 'Notă' },
                      { key: 'courses_ects', label: 'Nr. Credite' },
                      { key: 'courses_category', label: 'Categorie' },
                    ],
                    values: tableDataGrades,
                  }}
                />
              ) : null}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
