import React, { useEffect } from 'react';
import HomePresentation from './HomePresentation';
import HomeExposure from './HomeExposure';
import RightDesktopComponent from '../Utils/RightDesktopComponent';
import center from './../../assets/002.png';
import nextEvent from './../../assets/next-event.png';
const Home = ({ exposure, screenSize }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <HomeExposure exposure={exposure} />
            <HomePresentation title="le centre" issmg={center} link="/le-centre" />
            <HomePresentation title="prochainement" issmg={nextEvent} />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <HomeExposure exposure={exposure} />
          <HomePresentation title="le centre" issmg={center} link="/le-centre" />
          <HomePresentation title="prochai-nement" issmg={nextEvent} />
        </>
      }
    </>
  )
}


export default Home;