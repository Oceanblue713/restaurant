import React, { useState } from 'react';
import MenuItem from './MenuItem';
import menus from '../data/menuData';

const MenuList = ({count, handleAdd, handleSubtract, addMenuItem}) => {
  return (
    <div id="menulist">
      {menus.map((menu) => (
        <MenuItem price={menu.price} 
                  name={menu.name} 
                  count={count}
                  handleAdd={handleAdd}
                  handleSubtract={handleSubtract}
                  addMenuItem={addMenuItem} />
      ))}
    </div>
  );
}

export default MenuList;