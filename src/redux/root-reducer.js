import UserReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    user : UserReducer,
    cart : cartReducer
});