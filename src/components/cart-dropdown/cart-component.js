import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../cutomButton/button';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
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
                <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden()); }}> GO TO CHECKOUT </CustomButton>
          
        </div>
    )
}

const mapStateToProp = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProp)(CartDropdown)) ;