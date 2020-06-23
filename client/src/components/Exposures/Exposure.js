import React from 'react';
import vague from './../../assets/vague-paragraphe.png';
import fleche from './../../assets/fleche-diag.png';
import pastille from './../../assets/pastille.png'; // Tell webpack this JS file uses this image
import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image
import {
  Link
} from "react-router-dom";
import FooterExposure from '../Utils/FooterExposure';

const Exposure = ({ exposure, title }) => {
  const backUrl = 'http://localhost:1337';
  return (
    <div className="exposures">   
      <p>{title}</p>
      <p className="title-exposure">
        <img src={vague} /> {exposure.name}
      </p>
      <p className="description-exposure">
        <img src={fleche} /> <span>{exposure.summary}</span>
      </p>
      <Link to={`/events/${exposure.id}`}>
        <div className="img-exposure">
          <img src={pastille} className="pastille" />
          <img src={backUrl + exposure.preview.url} className="main-img-exposure" />
          <div className="btn-more">
            <img src={flecheDroit} />  en savoir plus   <img src={vague} />
          </div>
        </div>
      </Link>
      <FooterExposure exposure={exposure} />
    </div >
  )
}

export default Exposure;