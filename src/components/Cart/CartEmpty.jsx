import React from 'react';
import image from '../../assets/img/empty-cart.jpg'

const CartEmpty = ({onCloseCLick}) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
      <button onClick={() => onCloseCLick(false)} className="greenButton">
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
        Вернуться назад
      </button>
    </div>
  );
};

export default CartEmpty;
