import React from 'react';
import { useDispatch } from 'react-redux';

import s from './Cart.module.scss';
import CartItem from './CartItem';
import { removeBootsFromCart } from '../../redux/actions/cart';

const CartFull = (props) => {
  const dispatch = useDispatch();
  const onClickRemove = (boots) => {
    dispatch(removeBootsFromCart(boots));
  };

  return (
    <>
      <div className={s.cartItems}>
        {props.basket.map((el) => (
          <CartItem
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            image={el.image}
            onClickRemove={onClickRemove}
          />
        ))}
      </div>

      <div className={s.cartTotalBlock}>
        <ul className="">
          <li>
            <span>Итого:</span>
            <div></div>
            <span className={s.bold}>21 999 руб.</span>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <span className={s.bold}>1074 руб.</span>
          </li>
        </ul>
        <button className={'greenButton ' + s.greenButton}>
          Оформить заказ
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 7H14.7143"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartFull;
