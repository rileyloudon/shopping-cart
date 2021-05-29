import { Link } from 'react-router-dom';
import cartImg from '../img/shopping_cart_24dp.svg';

const Navigation = ({ cart }) => {
  return (
    <header className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/checkout'>
        <p id='cart-number'>{cart.length}</p>
        <img src={cartImg} alt='Shopping Cart' />
      </Link>
    </header>
  );
};

export default Navigation;
