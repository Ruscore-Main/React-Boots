import {combineReducers} from 'redux';
import bootsReducer from './boots';
import cartReducer from './cart';
import favoritesReducer from './favorites';


const mainReducer = combineReducers({
    boots: bootsReducer,
    cart: cartReducer,
    favorites: favoritesReducer
});

export default mainReducer;