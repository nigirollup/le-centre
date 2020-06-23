import React from 'react';
import fleche from './../../assets/fleche-diag.png';
import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image

const FooterExposure = ({ exposure }) => {
  const startDate = exposure.start_date.split('-');
  const endDate = exposure.end_date.split('-');
  const months = {
    '01': 'janvier',
    '02': 'février',
    '03': 'mars',
    '04': 'avril',
    '05': 'mai',
    '06': 'juin',
    '07': 'juillet',
    '08': 'août',
    '09': 'septembre',
    '10': 'octobre',
    '11': 'novembre',
    '12': 'décembre'
  };
  return (
    <div className="footer-exposure">
      <div className="date-exposure">
        <img src={fleche} /> <span>{startDate[2]} {months[startDate[1]]} {startDate[0]}</span>
        <span>{endDate[2]} {months[endDate[1]]} {endDate[0]}</span>
      </div>
      <div className="shop-exposure">
        <img src={flecheDroit} /><span>billeterie</span>
      </div>
    </div>
  )
}

export default FooterExposure;