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
          <span>{exposure.description}</span>
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