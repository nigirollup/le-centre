import React, { useState } from 'react'
import Burger from './Burger'
import Logo from './Logo';


const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className="header">
        <Logo />
        <Burger
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </div>
    </>
  )
};

export default Header;
