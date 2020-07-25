import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
 

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
           
            <span className='item-count'> {itemCount}</span>
            
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToPorps = ({cart : {cartItems}}) => ({
    itemCount : cartItems.reduce(
        (accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0 
    )
})

export default connect(mapStateToPorps, mapDispatchToProps)(CartIcon);