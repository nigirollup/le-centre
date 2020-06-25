import React, { useEffect } from 'react';
import vague from './../../assets/vague-paragraphe.svg';
import map from './../../assets/map.png';
import fleche from './../../assets/fleche-droit.png';


const FindUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className="find-us">
      <p className="title-find">
        comment venir
      </p>
      <div className="map">
        <div className="plan">
          <img src={map} />
        </div>
        <ul className="information-find">
          <li>
            <img src={vague} />
            <span>infos pratiques</span>
            <p>
              Le Centre, Base Sous-Marine
            </p>
            <p>
              Boulevard Alfred Daney
            </p>
            <p>
              33300 Bordeaux
            </p>
            <p>
              Tel +33 (0)5 56 11 11 50
            </p>
          </li>
          <li>
            <img src={vague} />
            <span>se rendre au Centre</span>
            <p>Tram B - arrêt Cité du Vin - 2,3km</p>
            <p>
              Tram C - arrêt Ravezies - 1,5km
            </p>
            <p>
              V3 - station Lucien Faure - 1,3km
            </p>
            <p>
              Bus - arrêt Latule Lianes 9 et 32 - 550m
            </p>
          </li>
          <li onClick={() => {
                window.open("https://maps.google.com/maps?daddr=44.8729502,-0.5594119&amp;ll=");
          }}>
          <img src={fleche} />
            <span>google maps</span> 
          </li>
        </ul>
      </div>
    </div >
  )
}

export default FindUs;