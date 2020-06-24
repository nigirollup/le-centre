import React from 'react';
import vague from './../../assets/vague-paragraphe.png';
import fleche from './../../assets/fleche-gauche.png';

const Tarif = () => {
  return (
    <div className="tarif">
      <p className="title-tarif">
        tarifs
        </p>
      <ul className="information-tarif">
        <li>
          <img src={vague} />
          <span>Plein tarif - 13€</span>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tarif réduit Senior - 11€
            </span>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tarif réduit - 10€
           </span>
          <p>Demandeur d'emploi, Bénéficiaires des minimas sociaux, Enseignant, Maisons des artistes, Guide conférencier, PMR + accompagnateur Etudiants</p>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tarif jeune - 9€
            </span>
          <p>De 6 à 17 ans</p>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tarif groupe - 10€
            </span>
          <p>Groupe de 15 personnes</p>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tarif groupe scolaire - 8€
            </span>
        </li>
      </ul>
      <div className="where-btn">
        <img src={fleche} />
        <span>billeterie</span>
      </div>
    </div>
  )
}

export default Tarif;