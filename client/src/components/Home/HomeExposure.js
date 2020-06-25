import React from 'react';
import vague from './../../assets/vague-paragraphe.svg';
import fleche from './../../assets/fleche-diag.svg';
import pastille from './../../assets/pastille.png'; // Tell webpack this JS file uses this image
import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image

import {
  Link, useRouteMatch
} from "react-router-dom";
import FooterExposure from '../Utils/FooterExposure';

const HomeExposure = ({ exposure }) => {
  const backUrl = 'https://le-centre-api.herokuapp.com';
  return (
    <div className="home-exposure">
      <div className="d-flex-a">
        <img src={vague} /> <span> en ce moment</span>
      </div>
      <p className="title-exposure">
        {exposure.name}
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

export default HomeExposure;