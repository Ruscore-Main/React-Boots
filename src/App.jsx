import React from 'react';

import searchImage from './assets/img/search.svg';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

function App() {

  const [visibleCart, setVisibleCart] = React.useState(false);
  
  return (
    <div className="wrapper">
      
      {visibleCart && <Cart setVisibleCart={setVisibleCart}/> }

      <Header setVisibleCart={setVisibleCart} />

      <main>
        <div className="titleBlock">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src={searchImage} alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="boots">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </main>
    </div>
  );
}

export default App;
