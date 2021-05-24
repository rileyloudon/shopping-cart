import { Link } from 'react-router-dom';
import shoppingCart from '../img/shopping_cart_24dp.svg';

const Navigation = () => {
  return (
    <header className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/checkout'>
        <img src={shoppingCart} alt='Shopping Cart' />
      </Link>
    </header>
  );
};

export default Navigation;
