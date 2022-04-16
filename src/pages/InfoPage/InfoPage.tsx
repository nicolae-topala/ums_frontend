import React from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';

//Photos
import photoDrept from './resources/fac_drept.png';
import photoEcon from './resources/fac_economie.png';
import photoIsto from './resources/fac_istorie.png';
import photoSei from './resources/fac_sei.png';
import photoTeo from './resources/fac_teologie.png';
import photoDoc from './resources/scoala_doc.png';

import './InfoPage.scss';
import { ContactInfo } from './atoms/ContactInfo';

export const InfoPage = (): React.ReactElement => {
  return (
    <Layout>
      <div className="info-page">
        <div className="info-page__container">
          <div className="info-page__container__title">
            <h2>Facultăți</h2>
          </div>
          <div className="info-page__container__description">
            <ContactInfo
              title="Facultatea de Drept și Științe Sociale"
              photo={photoDrept}
              url="https://uab.ro/facultate/4-facultatea-de-drept-si-stiinte-sociale"
              address={['Strada Unirii nr. 15-17']}
              phone={['+40258813994']}
              email={['sec-drept@uab.ro']}
            />
            <ContactInfo
              title="Facultatea de Științe Economice"
              photo={photoEcon}
              url="https://uab.ro/facultate/2-facultatea-de-stiinte-economice/"
              address={['Strada Unirii nr. 15-17']}
              phone={['+40258806263']}
              email={['secretariat_economice@uab.ro']}
            />
            <ContactInfo
              title="Facultatea de Istorie și Filologie"
              photo={photoIsto}
              url="https://uab.ro/facultate/3-facultatea-de-istorie-si-filologie/"
              address={['Strada Unirii nr. 15-17']}
              phone={['+40258811412']}
              email={['secretariat_istorie@uab.ro']}
            />
            <ContactInfo
              title="Facultatea de Științe Exacte și Inginerești"
              photo={photoSei}
              url="https://uab.ro/facultate/1-facultatea-de-stiinte-exacte-si-ingineresti/"
              address={['Strada Unirii nr. 15-17']}
              phone={['+40258811512']}
              email={['sec-fsei@uab.ro', 'fsei@uab.ro']}
            />
            <ContactInfo
              title="Facultatea de Teologie Ortodoxă"
              photo={photoTeo}
              url=""
              address={['Bulevardul 1 Decembrie 1918, nr. 13']}
              phone={['+40258835901']}
              email={['teologialba@yahoo.com']}
            />
            <ContactInfo
              title="Studii Universitare de Doctorat"
              photo={photoDoc}
              url=""
              address={['Strada Gabriel Bethlen, nr. 5']}
              phone={['+40258806272']}
              email={['doctorat@uab.ro']}
            />
          </div>
        </div>
        <div className="info-page__container">
          <div
            className="info-page__container__title"
            style={{ marginTop: '30px' }}
          >
            <h2>Contacte</h2>
          </div>
          <div className="info-page__container__description">
            <ContactInfo
              className="contact"
              height="150px"
              top="35px"
              title="Rectorat Universitate"
              address={['Gabriel Bethlen Nr.5']}
              phone={['+40258806130']}
              email={['cond@uab.ro']}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
