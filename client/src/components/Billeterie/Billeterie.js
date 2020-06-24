import React from 'react';
import vague from './../../assets/vague-paragraphe.png';
import fleche from './../../assets/fleche-diag.png';
import flecheDroit from './../../assets/fleche-droit.png';


const Billeterie = ({ screenSize }) => {
  return (
    <div className="billeterie">
      <p className="title">
        billeterie
      </p>
      <ul className="information">
        <li>
          <div className="time">
            <img src={vague} />
            <span>en ce moment</span>
          </div>
          <div className="title-group">
            <p className="title-event">
              africa 2020
            </p>
            <div className="date-exposure">
              <img src={fleche} /> <span>01 FÉVRIER 2021 </span>
              <span>30 AVRIL 2021</span>
            </div>
          </div>
          <p className="description">
            Projet panafricain et pluridisciplinaire, centré sur l'innovation dans les arts, les sciences, les technologies, l'entrepreneuriat et l'économie.
          </p>
          <div className="bottom">
            <div className="price">
              {screenSize <= 840 &&
                <>
                  <img src={fleche} /> <span>à partir de</span>
                </>
              }
              <span>9€</span>
            </div>
            <div className="btn-buy">
              <img src={flecheDroit} />acheter<img src={vague} />
            </div>
          </div>
        </li>
      </ul>
      <ul className="information">
        <li>
          <div className="time">
            <img src={vague} />
            <span>en ce moment</span>
          </div>
          <div className="title-group">
            <p className="title-event">
              africa 2020
            </p>
            <div className="date-exposure">
              <img src={fleche} /> <span>01 FÉVRIER 2021 </span>
              <span>30 AVRIL 2021</span>
            </div>
          </div>
          <p className="description">
            Projet panafricain et pluridisciplinaire, centré sur l'innovation dans les arts, les sciences, les technologies, l'entrepreneuriat et l'économie.
          </p>
          <div className="bottom">
            <div className="price">
              {screenSize <= 840 &&
                <>
                  <img src={fleche} /> <span>à partir de</span>
                </>
              }
              <span>9€</span>
            </div>
            <div className="btn-buy">
              <img src={flecheDroit} />acheter<img src={vague} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Billeterie;