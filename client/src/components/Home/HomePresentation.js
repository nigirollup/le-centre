import React from 'react';
import vagueSvg from './../../assets/vague-paragraphe.svg';

import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image
import { Link } from 'react-router-dom';

const HomePresentation = ({ title, issmg, link }) => {
  let titleFormat = title.split('-');
  console.log(titleFormat)
  return (
    <div className="home-presentation">
      <div className="img-exposure">
        <p className="home-name">{titleFormat.length === 1 ?
          <>
            {title}</>
          :
          <>
            {titleFormat[0]}-<span>{titleFormat[1]}</span>
          </>
        }</p>
        <img src={issmg} className="main-img-exposure" />
        <Link to={link}>
          <div className="btn-more">
            <img src={flecheDroit} />  en savoir plus   <img src={vagueSvg} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePresentation;