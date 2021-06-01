import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ItemPage = (props) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const item = {
    ...props.shopItems.filter((item) => item.name === props.match.params.name)[0],
  };
  let history = useHistory();

  const handleClick = () => {
    if (!quantity) return;
    props.addToCart(item, quantity);
    setShowQuantity(false);
    setQuantity(1);
  };

  return (
    <div className='item-page'>
      <button type='button' onClick={() => history.goBack()}>
        Back
      </button>
      <img className='item-img' src={item.img} alt={item.name} />
      <h3 className='item-name'>{item.name}</h3>
      <p className='item-price'>
        {item.price === 'Contact Us' ? 'Contact Us' : '₽' + item.price}
      </p>
      <p>{item.description}</p>
      <p>{item.inStock ? 'Status: In Stock' : 'Status: Sold Out'}</p>
      {showQuantity ? (
        <>
          <div className='quantity-form'>
            <label htmlFor='quantity'>How many would you like?</label>
            <input
              type='number'
              inputMode='numeric'
              id='quantity'
              name='quantity'
              value={quantity}
              min='1'
              max='999'
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <button onClick={handleClick}>Add To Cart</button>
        </>
      ) : (
        <button
          className={item.inStock ? null : 'sold-out'}
          onClick={item.inStock ? () => setShowQuantity(true) : undefined}
        >
          {item.inStock ? 'Buy' : 'Sold Out'}
        </button>
      )}
    </div>
  );
};

export default ItemPage;
