import axios from "axios"


// thunk actions

export const addToFavorite = boots => dispatch => {
    axios.post('https://611f54029771bf001785c85b.mockapi.io/favorites', boots)
} 
