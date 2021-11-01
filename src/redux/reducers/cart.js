const ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SET_CART = 'SET_CART';

const initialState = {
  items: [],
  isLoaded: false
};

const cartReducer = (state = initialState, action) => {
  // Добавление обуви в корзину
  switch (action.type) {
    case SET_CART: {
      return {
        ...state,
        items: [...action.payload],
        isLoaded: true
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    // Удаление обуви из корзины
    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
