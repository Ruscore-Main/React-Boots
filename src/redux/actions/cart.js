import axios from "axios"


export const addToCartAC = boots => ({type: 'ADD_TO_CART', payload: boots});

export const removeFromCartAC = boots => ({type: 'REMOVE_FROM_CART', payload: boots});

// thunk actions
export const updateCart = () => dispatch => {
  axios.get('https://611f54029771bf001785c85b.mockapi.io/cart').then(res => dispatch({type: 'UPDATE_CART', payload: res.data}))
} 

export const addBootsToCart = boots => dispatch => {
  axios.post('https://611f54029771bf001785c85b.mockapi.io/cart', boots).then(() => dispatch(addToCartAC(boots)))
}

export const removeBootsFromCart = (boots) => dispatch => {
  axios.delete(`https://611f54029771bf001785c85b.mockapi.io/cart/${boots.id}`).then(() => dispatch(removeFromCartAC(boots)))
}