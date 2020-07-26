import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartNumber} from '../../redux/cart/cart.selector';

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

const mapStateToPorps = (state) => ({
    itemCount : selectCartNumber(state)
})

export default connect(mapStateToPorps, mapDispatchToProps)(CartIcon);