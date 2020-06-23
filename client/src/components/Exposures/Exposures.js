import React from 'react';
import Exposure from './Exposure';

const Exposures = ({ currentExposure, nextExposure, exposures }) => {
  return (
    <>
      <Exposure exposure={currentExposure} title="en ce moment" />
      <Exposure exposure={nextExposure} title="prochai-nement" />
      <Exposure exposure={exposures[exposures.length * Math.random() | 0]} title="archives" />
    </>
  )
}

export default Exposures;