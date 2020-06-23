import React from 'react';
import FooterExposure from '../Utils/FooterExposure';
import logoEvent from './../../assets/africa-logo-2020.png';
import center from './../../assets/001.png'; // Tell webpack this JS file uses this image
import fleche from './../../assets/fleche-diag.png';
import flecheGauche from './../../assets/fleche-gauche.png';
import flecheDroit from './../../assets/fleche-droit.png';


const Exposure = ({ exposure }) => {
  const backUrl = 'http://localhost:1337';
  return (
    <div className="exposure">
      <div className="header-exposure">
        <p className="title-exposure">
          {exposure.name}
        </p>
        <p>
          <img src={backUrl + exposure.logo.url} />
        </p>
      </div>
      <FooterExposure exposure={exposure} />
      <img src={backUrl + exposure.preview.url} className="main-img-exposure" />
      <div className="description-exposure">
        <p>
          <img src={fleche} />
        </p>
        <p>
          <span>Africa2020 est un projet panafricain et pluridisciplinaire, centrée sur l'innovation dans les arts, les sciences, les technologies, l'entrepreneuriat et l'économie. L'éducation sera une question transversale pour le partage et la transmission de savoirs. Cette Saison inédite favorisera les mobilités, mettra à l'honneur les femmes dans tous les secteurs d'activité et ciblera en priorité la jeunesse. L'ambition d'Africa2020 est de créer un mouvement d'émancipation global à travers un engagement durable bâti autour des valeurs de la citoyenneté.</span>
        </p>
      </div>
      <ul className="link-event-nl">
        <li>
          <span>archives</span> <img src={flecheGauche} />
        </li>
        <li>
          <img src={flecheDroit} />
          <span>
            prochainement
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Exposure;