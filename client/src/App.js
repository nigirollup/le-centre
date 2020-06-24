import React, { useState, useEffect } from 'react';
import './App.scss';
import Strapi from 'strapi-sdk-javascript';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MenuMobile from './components/Menu/MenuMobile';
import MenuDesktop from './components/Menu/MenuDesktop';
import Header from './components/Menu/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Event from './components/Exposure/Event';
import Exposures from './components/Exposures/Exposures';
import FindUs from './components/FindUs/FindUs';
import Billeterie from './components/Billeterie/Billeterie';
import FunFact from './components/Funfact/Funfact';
import FooterDesktop from './components/Footer/FooterDesktop';
import LeCentre from './components/LeCentre/LeCentre';


const strapi = new Strapi('http://localhost:1337');


const App = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const [openMenu, setOpenMenu] = useState(false)
  const [exposures, setExposures] = useState([]);

  useEffect(() => {
    async function fetchExposures() {
      const exposures = await strapi.getEntries('exposures');
      setExposures(exposures)
    }
    fetchExposures();
  }, [])

  const updateWindowDimensions = () => {
    setScreenSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
  }, [])

  if (exposures.length === 0) return '';

  let currentExposure = exposures.find(exposure => {
    return Date.parse(exposure.start_date) <= Date.now() && Date.parse(exposure.end_date) >= Date.now();
  })

  let nextExposure = exposures.find(exposure => {
    return Date.parse(exposure.start_date) > Date.parse(currentExposure.start_date);
  })

  return (
    <Router>
      <div>
        {screenSize >= 840 ?
          <MenuDesktop
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          /> :
          <>
            <MenuMobile
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <Header
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </>
        }
        <div className="container">
          <Switch>
            <Route path="/" exact={true}>
              <Home
                exposure={currentExposure}
                screenSize={screenSize}
              />
            </Route>
            <Route path="/events" exact={true}>
              <Exposures
                currentExposure={currentExposure}
                nextExposure={nextExposure}
                exposures={exposures}
                screenSize={screenSize}
              />
            </Route>
            <Route path="/events/:id" exact={true}>
              <Event
                screenSize={screenSize}
              />
            </Route>
            <Route path="/find" exact={true}>
              <FindUs />
            </Route>
            <Route path="/billeterie" exact={true}>
              <Billeterie
                screenSize={screenSize}
              />
            </Route>
            <Route path="/fun-fact/:id" exact={true}>
              <FunFact
                screenSize={screenSize}
              />
            </Route>
            <Route path="/le-centre" exact={true}>
              <LeCentre
                screenSize={screenSize}
              />
            </Route>
          </Switch>
          {screenSize >= 840 ?
            <FooterDesktop /> :
            <Footer />
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
