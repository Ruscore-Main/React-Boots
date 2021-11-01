import React from 'react';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoots } from './redux/actions/boots';
import { setCart } from './redux/actions/cart';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import { addToFavorite } from './redux/actions/favorites';

function App() {
  const [visibleCart, setVisibleCart] = React.useState(false);
  const { isLoaded, items } = useSelector((state) => state.boots);
  const [favorites, setFavorites] = React.useState([
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      image: '/img/1.jpg',
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 8499,
      image: '/img/2.jpg',
    },
  ]);

  const dispatch = useDispatch();

  const onAddToFavorite = boots => {
    dispatch(addToFavorite(boots));
    setFavorites(prev => [...prev, boots])
  }
  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchBoots());
    }

    // тут решается проблема с лишними карточками
    if (!visibleCart) {
      document.body.style.overflowY = 'auto';
      document.title = 'Главная';
    }
  }, [visibleCart]);

  // Достаем из бд корзину при первом создании
  React.useEffect(() => {
    dispatch(setCart());
  }, []);
  const { items: basket, isLoaded: isLoadedBasket } = useSelector(({ cart }) => cart);

  // Показываеть корзину
  const showCart = () => {
    document.body.style.overflowY = 'hidden';
    return <Cart setVisibleCart={setVisibleCart} basket={basket} />;
  };

  return (
    <div className="wrapper">
      {visibleCart && showCart()}

      <Header setVisibleCart={setVisibleCart} />

      <main>
        <Route exact path="/favorites" render={() => <Favorite items={favorites} onAddToFavorite={onAddToFavorite}/>}></Route>
        <Route
          exact
          path="/"
          render={() => <Home isLoaded={isLoaded} items={items} basket={basket} onAddToFavorite={onAddToFavorite} />}></Route>
      </main>
    </div>
  );
}

export default App;
