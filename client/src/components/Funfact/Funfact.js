import React from 'react';
import vague from './../../assets/vague-paragraphe.png';
import fleche from './../../assets/fleche-diag.png';


const FunFact = () => {
  return (
    <div className="fun-fact">
      <p className="title-find">
        fun fact
      </p>
      <div className="map">
        <ul className="information-find">
          <li>
            <div className="flex">
              <img src={vague} />
              <span>On saura où se protéger pour la 3ème guerre mondiale !</span>
            </div>
            <div className="fact">
            <img src={fleche} />
              <p>
              La base sous-marine de Bordeaux est équipé d'une structure "Fangrost" lui permettant de faire exploser les bombes avant qu'elles n'atteignent la première dalle. De plus l'épaisseur des murs en béton font plus de 5 mètres.
            </p>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default FunFact;