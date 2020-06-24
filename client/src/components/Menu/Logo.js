import React from 'react';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-img" src={logo} />
      </Link>
    </div>
  )
}

export default Logo;