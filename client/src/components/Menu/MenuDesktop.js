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
        <img src={logo} />
      </div>
      <ul className="link-menu">
        <li className={`${pathName === '/' ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/">le centre
      {pathName === '/' &&
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
        <li className={`${pathName === '/come' ? 'current-link' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/come">comment venir
      {pathName === '/come' &&
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
          <Link to="/users">billeterie</Link>
        </li>
      </ul>
    </div >
  )
}

export default MenuDesktop;