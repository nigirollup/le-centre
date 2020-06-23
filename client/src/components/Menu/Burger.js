import React from 'react';

const Burger = ({openMenu, setOpenMenu}) => {
  return (
    <div className="burger" onClick={() => setOpenMenu(!openMenu)}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger;