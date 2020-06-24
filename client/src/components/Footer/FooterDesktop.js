import React from 'react';
import vague from './../../assets/vague-paragraphe-white.png';
import fleche from './../../assets/fleche-diag-white.png';
import logoBordeaux from './../../assets/logo-bordeaux.png';
import bdxCultureBlanc from './../../assets/bdx-culture-blanc.png';
import igLogo from './../../assets/ig-w.png';
import fbLogo from './../../assets/fb-w.png';
import ytLogo from './../../assets/yt-w.png';

const FooterDesktop = () => {
  return (
    <div className="footer-desktop">
      <div className="header-footer">
        <div className="left-footer">
          <p className="title">
            suivez nous
          </p>
          <ul className="social-link">
            <li>
              <img src={igLogo} />
            </li>
            <li>
              <img src={fbLogo} />
            </li>
            <li>
              <img src={ytLogo} />
            </li>
          </ul>
        </div>
        <div className="middle-footer">
          <p>
            Inscrivez-vous pour recevoir notre newsletter et restez informé sur nos prochaines expositions.
          </p>
          <p><input type="text" /></p>
          <p> <img src={fleche} /><span>souscrire</span></p>
        </div>
        <div className="right-footer">
          <div>
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
      </div>
      <div className="footer-footer">
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
            <li className="logo">
              <img src={logoBordeaux} />
              <img src={bdxCultureBlanc} />
            </li>
          </div>
          <li>
            <img src={vague} /><span>FR</span> | <span>EN</span>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default FooterDesktop;