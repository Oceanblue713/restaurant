import './App.css';
import React, { useState, useEffect } from 'react';
import './components/TableNumber';
import TableNumber from './components/TableNumber';
import MenuList from './components/MenuList';
import TotalPrice from './components/TotalPrice';

function App() {
  
  const [tableNumber, setTableNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTableNumber();
  }, [])

  const getTableNumber = () => {
    let tableNumber = Math.floor(Math.random() * 10000);
    setTableNumber(tableNumber);
  }

  return (
    <div className="App">
      <TableNumber tableNumber={tableNumber}/>
      <MenuList />
      <TotalPrice totalPrice={totalPrice}/>
    </div>
  );
}

export default App;
