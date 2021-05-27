const CartWithItems = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, { quantity, item }) => total + item.price * quantity,
    0
  );

  return (
    <div className='cart'>
      <div className='cart-items'>
        {cart.map(({ item, quantity }) => (
          <p key={item.name}>
            {`${item.name} x ${quantity} - ₽${item.price * quantity}`}
          </p>
        ))}
      </div>
      <p className='total'>{`Total - ₽  ${totalPrice.toLocaleString()}`}</p>
      <button>Purchase</button>
    </div>
  );
};

const EmptyCart = () => {
  return <p>Your cart is empty</p>;
};

const Checkout = ({ cart }) => {
  return (
    <>
      <h1>Your Cart</h1>
      {cart.length ? <CartWithItems cart={cart} /> : <EmptyCart />}
    </>
  );
};

export default Checkout;
