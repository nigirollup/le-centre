import React, { useEffect } from 'react';
import LeCentreContent from './LeCentreContent';
import RightDesktopComponent from '../Utils/RightDesktopComponent';

const LeCentre = ({ screenSize }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <LeCentreContent screenSize={screenSize} />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <LeCentreContent screenSize={screenSize} />
        </>
      }
    </>
  )
}

export default LeCentre;