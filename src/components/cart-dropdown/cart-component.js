import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../cutomButton/button';
import CartItem from '../cartItem/cartItem';
import {connect} from 'react-redux';

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map((cartItem) => {
                    return(<CartItem  key={cartItem.id} item={cartItem} />)
                    })} 
            </div>
                <CustomButton> GO TO CHECKOUT </CustomButton>
          
        </div>
    )
}

const mapStateToProp = ({cart : {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProp)(CartDropdown);