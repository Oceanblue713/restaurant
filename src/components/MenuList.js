import React from 'react';
import MenuItem from './MenuItem';

const MenuList = () => {
  return (
    <div id="menulist">
      <MenuItem foodImage="./images/ramen-tonkotsu.webp" price="100" name="Miso" count="1" />
    </div>
  );
}

export default MenuList;