import React from 'react';
import HomePresentation from './HomePresentation';
import HomeExposure from './HomeExposure';
import RightDesktopComponent from '../Utils/RightDesktopComponent';

const Home = ({ exposure, screenSize }) => {
  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <HomeExposure exposure={exposure} />
            <HomePresentation />
            <HomePresentation />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <HomeExposure exposure={exposure} />
          <HomePresentation />
          <HomePresentation />
        </>
      }
    </>
  )
}


export default Home;