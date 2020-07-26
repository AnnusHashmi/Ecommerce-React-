import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../cutomButton/button';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ?
                    cartItems.map((cartItem) => {
                    return(<CartItem  key={cartItem.id} item={cartItem} />)
                    }) :
                    <span className='empty-message'>Your cart is empty</span>
                } 
            </div>
                <CustomButton> GO TO CHECKOUT </CustomButton>
          
        </div>
    )
}

const mapStateToProp = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProp)(CartDropdown);