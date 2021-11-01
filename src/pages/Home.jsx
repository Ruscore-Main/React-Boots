import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card/Card';
import Title from '../components/Title/Title';

const Home = ({items, isLoaded, basket, onAddToFavorite}) => {

  const [searchValue, setSearchValue] = React.useState('');
  

  // Изменение строки поиска
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Title onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} />

      <div className="boots">
        {isLoaded ? (
          items
            .filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((el, i) => (
              <Card
                key={el.id}
                onFavorite={onAddToFavorite}
                wasAdded={basket.some((boots) => boots.id === el.id)}
                {...el}
              />
            ))
        ) : (
          <h1>НЕ ЗАГРУЗИЛОСЬ</h1>
        )}
      </div>
    </>
  );
};

export default Home;
