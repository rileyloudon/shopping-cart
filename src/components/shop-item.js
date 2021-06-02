import { useHistory } from 'react-router-dom';

const ShopItem = ({ item }) => {
  let history = useHistory();

  return (
    <div className='shop-item' onClick={() => history.push(`/shop/${item.name}`)}>
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
};

export default ShopItem;
