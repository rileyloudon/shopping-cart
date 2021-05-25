import React from 'react';
import ShopItem from './shop-item';

const Shop = ({ shopItems }) => {
  return (
    <div className='shop'>
      <h1>We hope you find what you need!</h1>
      <div className='shop-items'>
        {shopItems.map((item) => (
          <ShopItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
