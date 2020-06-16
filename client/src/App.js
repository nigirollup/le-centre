import React, { useState, useEffect } from 'react';
import './App.css';
import Strapi from 'strapi-sdk-javascript';

const strapi = new Strapi('http://localhost:1337');


const App = () => {
  const [exposures, setExposures] = useState([]);

  useEffect(() => {
    async function fetchExposures() {
      const exposures = await strapi.getEntries('exposures');
      setExposures(exposures)
    }
    fetchExposures();
  }, [])

  return (
    <div className="App">
      {exposures.map(exposure => {
        return (<article>
          <div>Title: {exposure.name}</div>
          <div>Content: {exposure.description}</div>
        </article>)
      })}
    </div>
  );
}

export default App;
