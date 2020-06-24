import React from 'react';
import {
  Link
} from "react-router-dom";

import logo from './../../assets/logo.png';
import vagueLink from './../../assets/vague-lien.png';

const MenuDesktop = ({ setOpenMenu, openMenu }) => {
  let pathName = window.location.pathname;
  return (
    <div className="menu-desktop">
      <div className="logo-img">
        <Link to="/">
          <img src={logo} />
        </Link>

      </div>
      <ul className="link-menu">
        <li className={`${pathName.startsWith('/le-centre') ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/le-centre">le centre
      {pathName.startsWith('/le-centre') &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName.startsWith('/events') ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/events">évènements
      {pathName.startsWith('/events') &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName === '/find' ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/find">comment venir
      {pathName === '/find' &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName === '/contact' ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/contact">contact
      {pathName === '/contact' &&
              <img src={vagueLink} />
            }</Link>
        </li>
        <li className="menu-last-btn" onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/billeterie">billeterie</Link>
        </li>
      </ul>
    </div >
  )
}

export default MenuDesktop;