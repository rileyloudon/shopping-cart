import img from '../img/pokemart.jpg';

const Home = () => {
  return (
    <div className='home'>
      <h2>Welcome to the Poke Mart</h2>
      <img src={img} alt='Pokemart' />
    </div>
  );
};

export default Home;
