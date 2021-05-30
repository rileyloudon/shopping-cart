import order from '../img/order-pikachu.svg';

const OrderSuccess = () => {
  return (
    <div className='success'>
      <h2>Thank you for your purchase!</h2>
      <img src={order} alt='Order delivered by Pikachu' />
    </div>
  );
};

export default OrderSuccess;
