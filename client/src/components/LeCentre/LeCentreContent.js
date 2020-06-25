import React from 'react';
import center from './../../assets/002.png'; // Tell webpack this JS file uses this image
import vague from './../../assets/vague-paragraphe.svg';
import fleche from './../../assets/fleche-diag.svg'; // Tell webpack this JS file uses this image
import flecheDroit from './../../assets/fleche-droit.png'; // Tell webpack this JS file uses this image
import base from './../../assets/base-sous-marine.png'; // Tell webpack this JS file uses this image
import group from './../../assets/group.png'; // Tell webpack this JS file uses this image

import tbm from './../../assets/tbm.png'; // Tell webpack this JS file uses this image
import pass from './../../assets/pass-senior.png'; // Tell webpack this JS file uses this image
import cartejeune from './../../assets/carte-jeunes.png'; // Tell webpack this JS file uses this image
import culture from './../../assets/culture-de-coeur.png'; // Tell webpack this JS file uses this image

import timeline from './../../assets/timeline.svg'; // Tell webpack this JS file uses this image
import timelineDesktop from './../../assets/timeline-desktop.svg'; // Tell webpack this JS file uses this image

const LeCentreContent = ({ screenSize }) => {
  return (
    <div className="home-presentation centre">
      <div className="img-exposure">
        <p className="home-name">le centre</p>
        <img src={center} className="main-img-exposure" />
      </div>
      <div className="title-head">
        <img src={vague} /> <span> aujourd'hui</span>
      </div>
      <div className="text-history">
        <img src={fleche} /> <span> Le Centre, l'un des 3 espaces culturels de la Base sous-marine, propose une programmation culturelle dédiée aux Arts Visuels, enrichie d’événements autour du spectacle vivant et de la musique, en lien étroit avec l’innovation artistique.</span>
      </div>
      <div className="schema">
        <img src={group} />
      </div>
      <div className="text-history">
        <img src={fleche} /> <span>
          La Base sous-marine s’oriente vers un projet culturel global et ambitieux, la Base 3 en 1 visant à terme l’exploitation des 41 000m2 du bâtiment contre 3000m2 actuellement. C’est donc un lieu d’exposition mutualisé avec différents espaces : Le Centre, le Bassin de Lumières et une troisième entité fera l’objet d’un Appel à Manifestation d’Intérêt à vocation économique et culturelle dans le courant de l’année 2019-2020.
                </span>
      </div>
      <div className="img-exposure">
        <img src={base} className="main-img-exposure base" />
        <div className="btn-more">
          <img src={flecheDroit} /> base sous-marine  <img src={vague} />
        </div>
      </div>
      <div className="title-head">
        <img src={vague} /> <span>hier</span>
      </div>
      <div className="text-history">
        <img src={fleche} /> <span>La Base sous-marine s’oriente vers un projet culturel global et ambitieux, la Base 3 en 1 visant à terme l’exploitation des 41 000m2 du bâtiment contre 3000m2 actuellement. C’est donc un lieu d’exposition mutualisé avec différents espaces : Le Centre, le Bassin de Lumières et une troisième entité fera l’objet d’un Appel à Manifestation d’Intérêt à vocation économique et culturelle dans le courant de l’année 2019-2020.</span>
      </div>

      <div className="date">
        <div className="timeline">
          {screenSize >= 840 ?
            <img src={timelineDesktop} /> :
            <img src={timeline} />
          }
        </div>
        <div>
          <div className="title-head">
            <img src={vague} /> <span>1941</span>
          </div>
          <div className="text-history">
            <img src={fleche} /> <span>
              Près de 6500 ouvriers français et étrangers ont travaillé à la construction de ce bâtiment de guerre. Il est composé de 11 alvéoles (4 bassins à flot et 7 bassins asséchables), capables d’accueillir 15 grands sous-marins et une tour bunker abritant bureaux, magasins et ateliers.
        </span>
          </div>
          <div className="title-head">
            <img src={vague} /> <span>1943</span>
          </div>
          <div className="text-history">
            <img src={fleche} /> <span>
              Achevé le U-Bunker de Bordeaux a une longueur de 235 mètres, une largeur de près de 160 mètres et une hauteur moyenne de 19 mètres, pour une superficie globale de plus de 41 000m2. Le volume total du béton utilisé s'élève à près de 600 000 m3.
           </span>
          </div>
          <div className="title-head last-date">
            <img src={vague} /> <span>1944</span>
          </div>
          <div className="text-history">
            <img src={fleche} /> <span>
              Jusqu'en août 1944, plus de 45 sous-marins y font escale et relâche. Le 25 août 1944, juste avant lalibération de Bordeaux, toutes les installations, les portes, le matériel et le machines sont dynamités et les sous-marins hors service sabotés.
          </span>
          </div>
        </div>
      </div>
      <div className="title-head">
        <img src={vague} /> <span>partenaires</span>
      </div>
      <ul className="partenaires">
        <li>
          <img src={tbm} />
        </li>
        <li>
          <img src={culture} />
        </li>
        <li>
          <img src={cartejeune} />
        </li>
        <li>
          <img src={pass} />
        </li>
      </ul>

    </div>
  )
}

export default LeCentreContent;