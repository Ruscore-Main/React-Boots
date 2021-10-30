import axios from "axios"

export const setBoots = items => ({type: 'SET_BOOTS', payload: items})

export const setLoaded = flag => ({type: 'SET_LOADED', payload: flag})

export const fetchBoots = () => dispatch => {
    console.log('sended')
    dispatch(setLoaded(false))
    axios.get('https://611f54029771bf001785c85b.mockapi.io/items')
    .then(data => dispatch(setBoots(data.data)))
}