import CartActionTypes from './cart.types';

const toggleCartHidden = () => ({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
});

const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload : item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export {toggleCartHidden, addItem};