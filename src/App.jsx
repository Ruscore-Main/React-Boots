import React from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Title from './components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoots } from './redux/actions/boots';
import { updateCart } from './redux/actions/cart';

function App() {
  const [visibleCart, setVisibleCart] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const dispatch = useDispatch();
  const { isLoaded, items } = useSelector((state) => state.boots);
  const basket = useSelector(({ cart }) => cart.items);

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
  React.useEffect(()=> {
    dispatch(updateCart());
  }, [])

  // Показываеть корзину
  const showCart = () => {
    document.body.style.overflowY = 'hidden';
    return <Cart setVisibleCart={setVisibleCart} basket={basket} />;
  };

  // Изменение строки поиска
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper">
      {visibleCart && showCart()}

      <Header setVisibleCart={setVisibleCart} />

      <main>
        <Title onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} />

        <div className="boots">
          {isLoaded ? (
            items
              .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  price={el.price}
                  image={el.image}
                  wasAdded={basket.some((boots) => boots.id === el.id)}
                />
              ))
          ) : (
            <h1>НЕ ЗАГРУЗИЛОСЬ</h1>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
