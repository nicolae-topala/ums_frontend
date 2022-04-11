import React, { useEffect, useState } from 'react';

//ui
import { Layout } from 'ui/organisms/Layout/Layout';
import { Menu } from 'ui/molecules/Menu/Menu';
import { Table } from 'ui/atoms/Table/Table';

//hooks
import { useStudentMenu } from 'hooks/useStudentMenu';

import './StudentPage.scss';
import { student } from 'libs/http/Student/student';

export const StudentPage = (): React.ReactElement => {
  const menu = useStudentMenu();
  const [pageValue, setPageValue] = useState('student-data');

  const [personal, setPersonal] = useState({});
  const [identification, setIdentification] = useState({});
  const [citizenship, setCitizenship] = useState({});
  const [birth, setBirth] = useState({});
  const [residence, setResidence] = useState({});
  const [religion, setReligion] = useState({});
  const [belonging, setBelonging] = useState({});
  const [military, setMilitary] = useState({});
  const [highschool, setHighschool] = useState({});
  const [university, setUniversity] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await student.getStudent();
      const personal = {
        allData: [
          { name: 'Nume', value: data.students_lastName },
          { name: 'Prenume', value: data.students_firstName },
          { name: 'Prenume mamă', value: data.students_firstNameMother },
          { name: 'Prenume tată', value: data.students_firstNameFather },
        ],
      };
      setPersonal(personal);

      const lol = new Date(data.students_birthdate).toISOString().slice(0, 10);
      const identification = {
        allData: [
          { name: 'CNP', value: data.students_cnp },
          { name: 'Pașaport', value: data.students_passport },
          { name: 'Carte Identitate', value: data.students_idCard },
          {
            name: 'Data de naștere',
            value: lol,
          },
        ],
      };
      setIdentification(identification);

      const citizenship = {
        allData: [
          { name: 'Sex', value: data.students_sex },
          { name: 'Cetățenie', value: data.students_citizenship },
          { name: 'Naționalitate', value: data.students_nationality },
        ],
      };
      setCitizenship(citizenship);

      const birth = {
        allData: [
          { name: 'Țară naștere', value: data.students_countryBirth },
          { name: 'Județ naștere', value: data.students_cityBirth },
          { name: 'Localitate naștere', value: data.students_countyBirth },
        ],
      };
      setBirth(birth);

      const residence = {
        allData: [
          { name: 'Țară domiciliu', value: data.students_countryResidence },
          { name: 'Județ domiciliu', value: data.students_cityResidence },
          {
            name: 'Localitate domiciliu',
            value: data.students_countyResidence,
          },
        ],
      };
      setResidence(residence);

      const religion = {
        allData: [{ name: 'Religie', value: data.students_religion }],
      };
      setReligion(religion);

      let students_minority;
      if (data.students_minority == false) students_minority = 'Nu';
      else students_minority = 'Da';
      const belonging = {
        allData: [
          { name: 'Minoritar', value: students_minority },
          { name: 'Stare civilă', value: data.students_maritalStatus },
        ],
      };
      setBelonging(belonging);

      let students_militarySituation;
      if (data.students_militarySituation == false)
        students_militarySituation = 'Neîncorporabil';
      else students_militarySituation = 'Încorporabil';
      const military = {
        allData: [
          { name: 'Situația militară', value: students_militarySituation },
          { name: 'Livret militar', value: data.students_militaryBooklet },
        ],
      };
      setMilitary(military);

      let students_highschoolOlympic;
      if (data.students_highschoolOlympic == false)
        students_highschoolOlympic = 'Nu';
      else students_highschoolOlympic = 'Da';
      const highschool = {
        allData: [
          {
            name: 'Anul de absolvire',
            value: data.students_highschoolGraduation,
          },
          {
            name: 'Medie bacalaureat',
            value: data.students_highschoolBaccalaureate,
          },
          { name: 'Olimpic', value: students_highschoolOlympic },
        ],
      };
      setHighschool(highschool);

      const university = {
        allData: [
          { name: 'Grupa', value: data.students_group },
          { name: 'Număr matricol', value: data.students_registrationNumber },
          { name: 'Media admitere', value: data.students_admissionGrade },
        ],
      };
      setUniversity(university);

      const contact = {
        allData: [
          { name: 'Telefon', value: data.students_phone },
          { name: 'Email', value: data.students_email },
        ],
      };
      setContact(contact);
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
