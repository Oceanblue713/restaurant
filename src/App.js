import './App.css';
import React, { useState, useEffect } from 'react';
import './components/TableNumber';
import TableNumber from './components/TableNumber';

function App() {
  
  const [tableNumber, setTableNumber] = useState('');

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
    </div>
  );
}

export default App;
