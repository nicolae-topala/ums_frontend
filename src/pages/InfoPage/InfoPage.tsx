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
              url=""
            />
            <ContactInfo
              title="Facultatea de Științe Economice"
              photo={photoEcon}
              url=""
            />
            <ContactInfo
              title="Facultatea de Istorie și Filologie"
              photo={photoIsto}
              url=""
            />
            <ContactInfo
              title="Facultatea de Științe Exacte și Inginerești"
              photo={photoSei}
              url=""
            />
            <ContactInfo
              title="Facultatea de Teologie Ortodoxă"
              photo={photoTeo}
              url=""
            />
            <ContactInfo
              title="Studii Universitare de Doctorat"
              photo={photoDoc}
              url=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
