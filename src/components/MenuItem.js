import React from 'react';

const MenuItem = ({category, count, foodImage, name, price, handleAdd, handleSubtract, addMenuItem}) => {

  return (
    <div className="menuItem" addMenuItem={addMenuItem} id={name}>
        <img src={foodImage} art={name} />
        <p>$ {price}</p>
        <p className={name}>{name}</p>
        <span>
          <button className={name} onClick={handleSubtract}>-</button>
            {count}
          <button onClick={handleAdd}>+</button>
        </span>
    </div>
  );
}

export default MenuItem;