import React from 'react';
import {useDispatch} from 'react-redux';

import liked from './../../assets/img/hearth-liked.svg';
import unliked from './../../assets/img/hearth-unliked.svg';
import added from './../../assets/img/btn-added.svg';
import plus from './../../assets/img/btn-plus.svg';


import s from './Card.module.scss'
import { addBootsToCart, removeBootsFromCart } from '../../redux/actions/cart';

const Card = ({id, title, price, image, wasAdded, onFavorite, favorited = false}) => {
  
  const [isAdded, setIsAdded] = React.useState(wasAdded);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(removeBootsFromCart({id, title, price, image}));
    setIsAdded(false);
  }

  const onClickRemove = () => {
    dispatch(addBootsToCart({id, title, price, image}));
    setIsAdded(true);
  }

  const onClickFavorite = () => {
    onFavorite({id, title, price, image})
    setIsFavorite(!isFavorite);

  }

  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <img src={isFavorite ? liked : unliked} alt="unliked" onClick={onClickFavorite} />
      </div>
      <img src={image} width="133" height="112" alt="bootImage" />
      <h5>{title}</h5>
      <div className={s.cardInfo}>
        <div className={s.cardPrice}>
          <span>Цена:</span>
          <span className={s.bold}>{price} руб.</span>
        </div>
          <div>
          {
            isAdded ?
            <img src={added} className='button' alt="added" onClick={onClickPlus}/>
            :
            <img src={plus} className='button' alt="plus" onClick={onClickRemove}/>
          }
          </div>
      </div>
    </div>
  );
};

export default Card;
