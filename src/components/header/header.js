import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-component'
import {selectCurrentUser} from '../../redux/user/user-selector';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
 
    <div className='options'>
    <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? 

        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>

        :

        <Link className='option' to='/signin'> SIGN IN </Link>
      }
      <CartIcon />
    </div>
      {hidden ? null :
        <CartDropdown />}
  </div>
);
 
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden : selectCartHidden(state)  
})

export default connect(mapStateToProps)(Header);
