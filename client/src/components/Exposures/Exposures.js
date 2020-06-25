import React, { useEffect } from 'react';
import Exposure from './Exposure';
import RightDesktopComponent from '../Utils/RightDesktopComponent';

const Exposures = ({ currentExposure, nextExposure, exposures, screenSize }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <Exposure exposure={currentExposure} title="en ce moment" />
            <Exposure exposure={nextExposure} title="prochainement" />
            <Exposure exposure={exposures[exposures.length * Math.random() | 0]} title="archives" />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <Exposure exposure={currentExposure} title="en ce moment" />
          <Exposure exposure={nextExposure} title="prochai-nement" />
          <Exposure exposure={exposures[exposures.length * Math.random() | 0]} title="archives" />
        </>
      }
    </>



  )
}

export default Exposures;