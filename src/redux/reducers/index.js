import {combineReducers} from 'redux';
import bootsReducer from './boots';
import cartReducer from './cart';

const mainReducer = combineReducers({
    boots: bootsReducer,
    cart: cartReducer
});

export default mainReducer;