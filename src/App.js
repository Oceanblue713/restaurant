import './App.css';
import React, { useState, useEffect } from 'react';
import './components/TableNumber';
import TableNumber from './components/TableNumber';
import MenuItem from './components/MenuItem';
import TotalPrice from './components/TotalPrice';
import Nav from './components/Nav';
import menus from './data/menuData';

function App() {
  
  const [tableNumber, setTableNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [orderedMenuPanel, setorderedMenuPanel] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    getTableNumber();
  }, [])

  const getTableNumber = () => {
    let tableNumber = Math.floor(Math.random() * 10000);
    setTableNumber(tableNumber);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }

  const handleSubtract = (e) => {
    // e.preventDefault();
    if (count === 0){
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  const toggleOrderedMenu = () => {
    if (orderedMenuPanel === false){
      setorderedMenuPanel(true);
    } else {
      setorderedMenuPanel(false);
    }
  }

  const addMenuItem = () => {
    let menuName = document.getElementById("miso");
    console.log("aaaa");
  }

  let orderPanel;
  if (orderedMenuPanel === true){
    orderPanel = (
      <div>
        <h3>Ordered Menu</h3>
        <TableNumber tableNumber={tableNumber}/>
        <TotalPrice totalPrice={totalPrice}/>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Ramen</h1>
      <Nav />
      {menus.map((menu) => (
        <MenuItem name={menu.name} 
                  price={menu.price}
                  count={count}
                  onClick={addMenuItem}/>
      ))}
      <button onClick={toggleOrderedMenu}>Cart</button>
      {orderPanel}
    </div>
  );
}

export default App;
