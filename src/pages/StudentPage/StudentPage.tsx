import React, { useEffect, useState } from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from './atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentPage.scss';
import { student } from 'libs/http/Student/student';
import { allData } from './atoms/Table/table.types';

export const StudentPage = (): React.ReactElement => {
  const menu = useStudentMenu();
  const [pageValue, setPageValue] = useState('student-data');

  const [personal, setPersonal] = useState<allData[]>([]);
  const [identification, setIdentification] = useState<allData[]>([]);
  const [citizenship, setCitizenship] = useState<allData[]>([]);
  const [birth, setBirth] = useState<allData[]>([]);
  const [residence, setResidence] = useState<allData[]>([]);
  const [religion, setReligion] = useState<allData[]>([]);
  const [belonging, setBelonging] = useState<allData[]>([]);
  const [military, setMilitary] = useState<allData[]>([]);
  const [highschool, setHighschool] = useState<allData[]>([]);
  const [university, setUniversity] = useState<allData[]>([]);
  const [contact, setContact] = useState<allData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await student.getStudent();

      setPersonal([
        { name: 'Nume', value: data.students_lastName || '' },
        { name: 'Prenume', value: data.students_firstName || '' },
        { name: 'Prenume mamă', value: data.students_firstNameMother || '' },
        { name: 'Prenume tată', value: data.students_firstNameFather || '' },
      ]);

      const students_birthdate = new Date(data.students_birthdate)
        .toISOString()
        .slice(0, 10);
      setIdentification([
        { name: 'CNP', value: data.students_cnp || '' },
        { name: 'Pașaport', value: data.students_passport || '' },
        { name: 'Carte Identitate', value: data.students_idCard || '' },
        {
          name: 'Data de naștere',
          value: students_birthdate || '',
        },
      ]);

      setCitizenship([
        { name: 'Sex', value: data.students_sex || '' },
        { name: 'Cetățenie', value: data.students_citizenship || '' },
        { name: 'Naționalitate', value: data.students_nationality || '' },
      ]);

      setBirth([
        { name: 'Țară naștere', value: data.students_countryBirth || '' },
        { name: 'Județ naștere', value: data.students_cityBirth || '' },
        {
          name: 'Localitate naștere',
          value: data.students_countyBirth || '',
        },
      ]);

      setResidence([
        {
          name: 'Țară domiciliu',
          value: data.students_countryResidence || '',
        },
        { name: 'Județ domiciliu', value: data.students_cityResidence || '' },
        {
          name: 'Localitate domiciliu',
          value: data.students_countyResidence || '',
        },
      ]);

      setReligion([
        {
          name: 'Religie',
          value: data.students_religion || '',
        },
      ]);

      let students_minority;
      if (data.students_minority == false) students_minority = 'Nu';
      else students_minority = 'Da';
      setBelonging([
        { name: 'Minoritar', value: students_minority || '' },
        { name: 'Stare civilă', value: data.students_maritalStatus || '' },
      ]);

      let students_militarySituation;
      if (data.students_militarySituation == false)
        students_militarySituation = 'Neîncorporabil';
      else students_militarySituation = 'Încorporabil';
      setMilitary([
        {
          name: 'Situația militară',
          value: students_militarySituation || '',
        },
        {
          name: 'Livret militar',
          value: data.students_militaryBooklet || '',
        },
      ]);

      let students_highschoolOlympic;
      if (data.students_highschoolOlympic == false)
        students_highschoolOlympic = 'Nu';
      else students_highschoolOlympic = 'Da';
      setHighschool([
        {
          name: 'Anul de absolvire',
          value: `${data.students_highschoolGraduation}` || '',
        },
        {
          name: 'Medie bacalaureat',
          value: `${data.students_highschoolBaccalaureate}` || '',
        },
        { name: 'Olimpic', value: students_highschoolOlympic || '' },
      ]);

      setUniversity([
        { name: 'Grupa', value: data.students_group || '' },
        {
          name: 'Număr matricol',
          value: `${data.students_registrationNumber}` || '',
        },
        {
          name: 'Media admitere',
          value: `${data.students_admissionGrade}` || '',
        },
      ]);

      setContact([
        { name: 'Telefon', value: data.students_phone || '' },
        { name: 'Email', value: data.students_email || '' },
      ]);
    };
    try {
      fetchData();
    } catch (e) {
      console.log();
    }
  }, []);

  return (
    <Layout>
      <div className="student-data-page">
        <div className="student-data-page__menu">
          <Menu menu={menu} pageValue={pageValue} onChange={setPageValue} />
        </div>
        {pageValue == 'student-data' ? (
          <div className="student-data">
            <div className="student-data__title">Date student</div>
            <div className="student-data__description">
              <Table caption="Personal" tableData={personal} />
              <Table caption="Identificare" tableData={identification} />
              <Table caption="Cetățenie" tableData={citizenship} />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-address' ? (
          <div className="student-data">
            <div className="student-data__title">Adrese</div>
            <div className="student-data__description">
              <Table caption="Naștere" tableData={birth} />
              <Table caption="Rezidență" tableData={residence} />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-belonging' ? (
          <div className="student-data">
            <div className="student-data__title">Apartenență</div>
            <div className="student-data__description">
              <Table caption="Religie" tableData={religion} />
              <Table caption="Apartenență" tableData={belonging} />
              <Table caption="Militar" tableData={military} />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-prevStudies' ? (
          <div className="student-data">
            <div className="student-data__title">Studii anterioare</div>
            <div className="student-data__description">
              <Table caption="Liceu" tableData={highschool} />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-education' ? (
          <div className="student-data">
            <div className="student-data__title">Şcolaritate</div>
            <div className="student-data__description">
              <Table caption="Informaţii şcolaritate" tableData={university} />
            </div>
          </div>
        ) : (
          ''
        )}
        {pageValue == 'student-contact' ? (
          <div className="student-data">
            <div className="student-data__title">Contact</div>
            <div className="student-data__description">
              <Table caption="Date contact" tableData={contact} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};
