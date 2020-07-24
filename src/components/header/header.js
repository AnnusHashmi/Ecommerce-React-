import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-component'

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
 
const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({
  currentUser,
  hidden  
})

export default connect(mapStateToProps)(Header);
