import React, { createContext,useState } from 'react';
import { menu } from './data/menuData';

const MenuContext = React.createContext({
  menuLists: [],
  totalMenuLists: 0,
  totalMenu: 0,
});

