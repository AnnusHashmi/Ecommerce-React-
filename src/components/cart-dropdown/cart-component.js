import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../cutomButton/button';


const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-item' />
                <CustomButton> GO TO CHECKOUT </CustomButton>
          
        </div>
    )
}

export default CartDropdown;