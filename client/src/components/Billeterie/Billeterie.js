import React, { useEffect } from 'react';
import vague from './../../assets/vague-paragraphe.svg';
import fleche from './../../assets/fleche-diag.svg';
import flecheDroit from './../../assets/fleche-droit.png';


const Billeterie = ({ screenSize }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
              <div className="top-block">
                <img src={fleche} />
                <div>
                  {screenSize <= 840 ?
                    <>
                      <p>01 FÉVRIER 2021</p>
                      <p>30 AVRIL 2021</p>
                    </>
                    :
                    <>
                      <p>01 FÉVRIER 2021 au 30 AVRIL 2021</p>
                    </>
                  }

                </div>
              </div>
              {screenSize > 840 &&
                <p className="description">
                  Projet panafricain et pluridisciplinaire, centré sur l'innovation dans les arts, les sciences, les technologies, l'entrepreneuriat et l'économie.
            </p>
              }
            </div>
          </div>
          {screenSize <= 840 &&
            <p className="description">
              Projet panafricain et pluridisciplinaire, centré sur l'innovation dans les arts, les sciences, les technologies, l'entrepreneuriat et l'économie.
            </p>
          }

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
              bienvenue 2021
            </p>
            <div className="date-exposure">
              <div className="top-block">
                <img src={fleche} />
                <div>
                  {screenSize <= 840 ?
                    <>
                      <p>25 MARS 2021</p>
                      <p>30 AVRIL 2021</p>
                    </>
                    :
                    <>
                      <p>25 MARS 2021 au 30 AVRIL 2021</p>
                    </>
                  }

                </div>
              </div>
              {screenSize > 840 &&
                <p className="description">
                  Description non disponible actuellement.
            </p>
              }
            </div>
          </div>
          {screenSize <= 840 &&
            <p className="description">
              Description non disponible actuellement.
            </p>
          }

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