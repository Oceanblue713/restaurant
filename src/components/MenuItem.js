import React from 'react';

const MenuItem = ({category, count, foodImage, name, price}) => {
  return (
    <div class={category}>
      <img src={foodImage} art={name} />
      <p>$ {price}</p>
      <p>{name}</p>
      <span>
        <button>-</button>
          {count}
        <button>+</button>
      </span>
    </div>
  );
}

export default MenuItem;