import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Shop from './components/shop';
import ItemPage from './components/item-page';
import Checkout from './components/checkout';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [shopItems] = useState([
    {
      name: 'Poke Ball',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/poke-ball.png',
      price: 200,
      inStock: true,
      description:
        'A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.',
    },
    {
      name: 'Great Ball',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/great-ball.png',
      price: 600,
      inStock: true,
      description:
        'A good, high-performance Poké Ball that provides a higher success rate for catching Pokémon than a standard Poké Ball.',
    },
    {
      name: 'Ultra Ball',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/ultra-ball.png',
      price: 1200,
      inStock: true,
      description:
        'An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball.',
    },
    {
      name: 'Master Ball',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/master-ball.png',
      price: 'Contact Us',
      inStock: false,
      description:
        'The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.',
    },
    {
      name: 'Potion',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/potion.png',
      price: 300,
      inStock: true,
      description:
        'A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.',
    },
    {
      name: 'Super Potion',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/super-potion.png',
      price: 700,
      inStock: true,
      description:
        'A spray-type medicine for treating wounds. It can be used to restore 60 HP to a single Pokémon.',
    },
    {
      name: 'Hyper Potion',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/hyper-potion.png',
      price: 1200,
      inStock: true,
      description:
        'A spray-type medicine for treating wounds. It can be used to restore 120 HP to a single Pokémon.',
    },
    {
      name: 'Max Potion',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/max-potion.png',
      price: 2500,
      inStock: true,
      description:
        'A spray-type medicine for treating wounds. It can be used to completely restore the max HP of a single Pokémon.',
    },

    {
      name: 'Antidote',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/antidote.png',
      price: 100,
      inStock: true,
      description:
        'A spray-type medicine for treating poisoning. It can be used to lift the effects of being poisoned from a single Pokémon',
    },
    {
      name: 'Parlyz Heal',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/paralyze-heal.png',
      price: 200,
      inStock: true,
      description:
        'A spray-type medicine for treating paralysis. It can be used to free a single Pokémon that has been paralyzed.',
    },
    {
      name: 'Awakening',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/awakening.png',
      price: 250,
      inStock: true,
      description:
        'A spray-type medicine to wake the sleeping. It can be used to rouse a single Pokémon from the clutches of sleep.',
    },
    {
      name: 'Burn Heal',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/burn-heal.png',
      price: 250,
      inStock: true,
      description:
        'A spray-type medicine for treating burns. It can be used to heal a single Pokémon suffering from a burn.',
    },
    {
      name: 'Ice Heal',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/ice-heal.png',
      price: 250,
      inStock: true,
      description:
        'A spray-type medicine for treating freezing. It can be used to thaw out a single Pokémon that has been frozen solid.',
    },
    {
      name: 'Repel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/repel.png',
      price: 350,
      inStock: true,
      description:
        "An item that drives away wild Pokémon so you won't encounter them for a short time.",
    },
    {
      name: 'Super Repel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/super-repel.png',
      price: 500,
      inStock: true,
      description:
        "An item that drives away wild Pokémon so you won't encounter them. It lasts longer than a Repel.",
    },
    {
      name: 'Max Repel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/max-repel.png',
      price: 700,
      inStock: true,
      description:
        "An item that drives away wild Pokémon so you won't encounter them. It lasts longer than a Super Repel.",
    },
    {
      name: 'Revive',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/revive.png',
      price: 1500,
      inStock: true,
      description:
        "A medicine that can be used to revive a single Pokémon that has fainted. It also restores half of the Pokémon's max HP.",
    },
    {
      name: 'Max Revive',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/max-revive.png',
      price: 5000,
      inStock: true,
      description:
        "A medicine that can be used to revive a single Pokémon that has fainted. It also fully restores the Pokémon's max HP.",
    },
    {
      name: 'Escape Rope',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/escape-rope.png',
      price: 550,
      inStock: true,
      description:
        'A long and durable rope. Use it to escape instantly from locations like caves or dungeons. It can be used any number of times.',
    },

    {
      name: 'Rare Candy',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/rare-candy.png',
      price: 10000,
      inStock: true,
      description:
        'A candy that is packed with energy. When consumed, it will instantly raise the level of a single Pokémon by one.',
    },
  ]);

  const addToCart = (item, quantity) => {
    const currentCart = cart;
    const repeatItem = currentCart.findIndex(
      (cartItem) => cartItem.item.name === item.name
    );

    repeatItem === -1
      ? currentCart.push({ item: item, quantity: quantity })
      : (currentCart[repeatItem].quantity += parseInt(quantity));

    setCart(currentCart);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' render={() => <Shop shopItems={shopItems} />} />
          <Route
            exact
            path='/shop/:name'
            render={(props) => (
              <ItemPage {...props} shopItems={shopItems} addToCart={addToCart} />
            )}
          />
          <Route exact path='/checkout' render={() => <Checkout cart={cart} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
