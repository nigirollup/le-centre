import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Strapi from 'strapi-sdk-javascript';

import Exposure from './Exposure';
import Artist from './Artist';
import Tarif from './Tarif';
const strapi = new Strapi('http://localhost:1337');

const Event = () => {
  const [exposure, setExposure] = useState(undefined);
  let {id} = useParams();
  console.log(id)

  useEffect(() => {
    async function fetchExposure() {
      const exposure = await strapi.getEntry('exposures', id);
      console.log(exposure)
      setExposure(exposure)
    }
    fetchExposure();
  }, [])

  if (!exposure) return '';
  return (
    <>
      <Exposure exposure={exposure} />
      <Artist artists={exposure.artists} />
      <Tarif />
    </>
  )
}

export default Event;