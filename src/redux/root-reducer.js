import UserReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory-reducer';
import shopDataReducer from './shop-data/shopData-reducer';


const  persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}

const rootReducer = combineReducers({
    user : UserReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shopData : shopDataReducer
})

export default persistReducer(persistConfig, rootReducer);