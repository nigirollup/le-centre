import React from 'react';
import {
  Link
} from "react-router-dom";
import logo from './../../assets/logo.png';
import cross from './../../assets/cross.png';
import igLogo from './../../assets/ig.png';
import fbLogo from './../../assets/fb.png';
import ytLogo from './../../assets/yt.png';
import vague from './../../assets/vague-paragraphe.png';
import vagueLink from './../../assets/vague-lien.png';





const MenuMobile = ({ openMenu, setOpenMenu }) => {
  let pathName = window.location.pathname;
  return (
    <div className={`menu ${openMenu ? 'open-menu' : ''}`}>
      <div className="top-bar">
        <Link to="/">
          <img className="logo-img" src={logo} onClick={() => setOpenMenu(false)} />
        </Link>
        <img className="cross-img" src={cross} onClick={() => setOpenMenu(false)} />
      </div>
      <ul className="link-menu">
        <li className={`${pathName.startsWith('/le-centre') ? 'current-link' : ''}`} onClick={() => { setOpenMenu(false) }}>
          <Link to="/le-centre">le centre
          {pathName.startsWith('/le-centre') &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName.startsWith('/events') ? 'current-link' : ''}`} onClick={() => { setOpenMenu(false) }}>
          <Link to="/events">évènements
          {pathName.startsWith('/events') &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName === '/find' ? 'current-link' : ''}`} onClick={() => { setOpenMenu(false) }}>
          <Link to="/find">comment venir
          {pathName === '/find' &&
              <img src={vagueLink} />
            }
          </Link>
        </li>
        <li className={`${pathName === '/contact' ? 'current-link' : ''}`} onClick={() => { setOpenMenu(false) }}>
          <Link to="/contact">contact
          {pathName === '/contact' &&
              <img src={vagueLink} />
            }</Link>
        </li>
        <li className="menu-last-btn" onClick={() => setOpenMenu(!openMenu)}>
          <Link to="/billeterie">billeterie</Link>
        </li>
      </ul>
      <ul className="social-link">
        <li>
          <img src={igLogo} />
        </li>
        <li>
          <img src={fbLogo} />
        </li>
        <li>
          <img src={ytLogo} />
        </li>
        <li>
          <img src={vague} /><span>FR</span> | <span>EN</span>
        </li>
      </ul>
    </div>
  )
}

export default MenuMobile;