import { useHistory } from 'react-router-dom';

const CartWithItems = ({ cart, completeOrder }) => {
  let history = useHistory();
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
      <button onClick={() => completeOrder(history)}>Purchase</button>
    </div>
  );
};

const EmptyCart = () => {
  return <p>Your cart is empty</p>;
};

const Checkout = ({ cart, completeOrder }) => {
  return (
    <>
      <h2>Your Cart</h2>
      {cart.length ? (
        <CartWithItems cart={cart} completeOrder={completeOrder} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Checkout;
