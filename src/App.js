import './App.css';
import React, { useState, useEffect } from 'react';
import './components/TableNumber';
import TableNumber from './components/TableNumber';
import MenuList from './components/MenuList';
import TotalPrice from './components/TotalPrice';
import Nav from './components/Nav';
import menus from './data/menuData';

function App() {
  
  const [tableNumber, setTableNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [orderedMenuPanel, setorderedMenuPanel] = useState(false);

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
    let menuName = document.getElementsByClassName().id;
    console.log(menuName);
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
      <MenuList count={count} 
                handleAdd={handleAdd} 
                handleSubtract={handleSubtract} 
                addMenuItem={addMenuItem} />
      <button onClick={toggleOrderedMenu}>Cart</button>
      {orderPanel}
    </div>
  );
}

export default App;
