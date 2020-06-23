import React from 'react';
import HomePresentation from './HomePresentation';
import HomeExposure from './HomeExposure';
import EventBtn from './EventsBtn';

const Home = ({ exposure }) => {
  return (
    <>
      <HomeExposure exposure={exposure} />
      <HomePresentation />
      <HomePresentation />
    </>
  )
}

export default Home;