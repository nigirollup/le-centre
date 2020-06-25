import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Strapi from 'strapi-sdk-javascript';

import Exposure from './Exposure';
import Artist from './Artist';
import Tarif from './Tarif';
import RightDesktopComponent from '../Utils/RightDesktopComponent';
const strapi = new Strapi('https://le-centre-api.herokuapp.com');

const Event = ({ screenSize }) => {
  const [exposure, setExposure] = useState(undefined);
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    async function fetchExposure() {
      const exposure = await strapi.getEntry('exposures', id);
      setExposure(exposure)
    }
    fetchExposure();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  if (!exposure) return '';



  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <Exposure exposure={exposure} />
            <Artist artists={exposure.artists} />
            <Tarif />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <Exposure exposure={exposure} />
          <Artist artists={exposure.artists} />
          <Tarif />
        </>
      }
    </>
  )
}

export default Event;