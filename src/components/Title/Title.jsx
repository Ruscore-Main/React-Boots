import React from 'react';
import PropTypes from 'prop-types';

import s from './Title.module.scss'
import searchImage from '../../assets/img/search.svg';

const Title = ({onChangeSearchInput, searchValue}) => {
  return (
    <div className={s.titleBlock}>
      <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки' }</h1>
      <div className={s.searchBlock}>
        <img src={searchImage} alt="search" />
        <input type="text" placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} maxLength={20}/>
      </div>
    </div>
  );
};

Title.propTypes = {
  onChangeSearchInput: PropTypes.func.isRequired
} 

export default Title;
