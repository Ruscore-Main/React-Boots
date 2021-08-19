import React from 'react';

import CartItem from './CartItem';
import s from './Cart.module.scss'

const Cart = (props) => {
  const cartBlock = React.useRef();

  const totalBlock = React.useRef();

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (!path.includes(cartBlock.current)) {
      props.setVisibleCart(false);
    }
  };

  React.useEffect(() => {
    totalBlock.current.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={s.overlay} ref={totalBlock}>
      <div className={s.drawer} ref={cartBlock}>
        <h2>Корзина</h2>

        <div className={s.cartItems}>
          <CartItem />
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
          <button className='greenButton'>
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
      </div>
    </div>
  );
};

export default Cart;
