import React from 'react';
import {useDispatch} from 'react-redux';

import unliked from './../../assets/img/hearth-liked.svg';
import bootImage from './../../assets/img/bootImage.jpg';
import added from './../../assets/img/btn-added.svg';
import plus from './../../assets/img/btn-plus.svg';


import s from './Card.module.scss'
import { addBootsToCart, removeBootsFromCart } from '../../redux/actions/cart';

const Card = ({id, title, price, image, wasAdded}) => {
  
  const [isAdded, setIsAdded] = React.useState(wasAdded);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(removeBootsFromCart({id, title, price, image}));
    setIsAdded(false);
  }

  const onClickRemove = () => {
    dispatch(addBootsToCart({id, title, price, image}));
    setIsAdded(true);
  }

  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <img src={unliked} alt="unliked" />
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
