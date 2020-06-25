import React from 'react';
import fleche from './../../assets/fleche-diag.svg';


const RightDesktopComponent = () => {
  return (
    <div className="right-home">
      <div className="sticky-home">
        <p className="horraire">
          <img src={fleche} /> <span>HORAIRES</span>
        </p>
        <p>Lundi - fermé</p>
        <p>Mardi à dimanche</p>
        <p>13h30 à 19h</p>
        <p className="horraire">
          <img src={fleche} /> <span>ADRESSE</span>
        </p>
        <p>Le Centre</p>
        <p>Base Sous-Marine</p>
        <p>Boulevard Alfred Daney</p>
        <p>33300 Bordeaux</p>
      </div>
    </div>
  )
}

export default RightDesktopComponent;