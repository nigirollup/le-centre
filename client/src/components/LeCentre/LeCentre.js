import React from 'react';
import LeCentreContent from './LeCentreContent';
import RightDesktopComponent from '../Utils/RightDesktopComponent';

const LeCentre = ({ screenSize }) => {
  return (
    <>
      {screenSize >= 840 ?
        <div className="split-home">
          <div className="left-home">
            <LeCentreContent />
          </div>
          <RightDesktopComponent />
        </div>
        :
        <>
          <LeCentreContent />
        </>
      }
    </>
  )
}

export default LeCentre;