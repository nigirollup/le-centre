import React from 'react';
import center from './../../assets/002.png'; // Tell webpack this JS file uses this image
import vague from './../../assets/vague-paragraphe.png';
import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image

const HomePresentation = () => {
  return (
    <div className="home-presentation">
      <div className="img-exposure">
        <p className="home-name">Le centre</p>
        <img src={center} className="main-img-exposure" />
        <div className="btn-more">
          <img src={flecheDroit} />  en savoir plus   <img src={vague} />
        </div>
      </div>
    </div>
  )
}

export default HomePresentation;