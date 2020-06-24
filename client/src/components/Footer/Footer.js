import React from 'react';
import vague from './../../assets/vague-paragraphe-white.png';
import fleche from './../../assets/fleche-droit-white.png';
import logoBordeaux from './../../assets/logo-bordeaux.png';
import bdxCultureBlanc from './../../assets/bdx-culture-blanc.png';

const Footer = () => {
  return (
    <div className="footer">
      <p className="title-footer">
        infos pratiques
        </p>
      <ul className="information-footer">
        <li>
          <img src={vague} />
          <span>
            Le centre, la Base sous-marine
            </span>
          <p>Boulevard alfred daney</p>
          <p>33000 Bordeaux</p>
        </li>
        <li>
          <img src={vague} />
          <span>
            05 56 11 11 50
            </span>
        </li>
        <li>
          <img src={vague} />
          <span>
            Lundi - fermé
            </span>
          <p>Mardi à dimanche - 13h30 à 19h</p>
        </li>
        <li>
          <img src={vague} />
          <span>
            Tram B - arrêt la cité du vin
            </span>
          <p>TRAM C - arrêt ravezies</p>
          <p>V3 - station lucien faure</p>
          <p>Bus - arrêt latule liane 9 et 32</p>
        </li>
      </ul>
      <div className="footer-location">
        <img src={fleche} />
        <span>nous trouver</span>
      </div>
      <div className="credit-footer">
        <p>inscrivez-vous pour recevoir notre newsletter et restez informé sur nos prochaines expositions.</p>
        <input type="text" placeholder="adresse e-mail" />
        <div className="footer-newsletter-btn">
          <img src={fleche} />
          <span>souscrire</span>
        </div>
        <ul className="bottom">
          <div>
            <li>
              conditions générales
          </li>
            <li>
              crédits
          </li>
            <li>
              mentions légales
          </li>
          </div>
          <div>
            <img src={logoBordeaux}/>
            <img src={bdxCultureBlanc}/>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Footer;