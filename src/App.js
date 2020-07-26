import React, { Component } from 'react';
import Homepage from './page-components/homepage/homepage';
import './page-components/homepage/homepage.styles.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header';
import ShopPage from './page-components/shopPage/shopPage';
import SignInSignUp from './page-components/signIn-signUp/signIn-signUp';
import CheckoutPage from './page-components/checkout/checkout';
import {auth, createUserProfile} from './firebase/firebase.utils';
import './App.css'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';

class App extends Component {


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else{
        this.props.setCurrentUser(userAuth);
      }
      
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
  
        <Header  />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render = {() => {return(this.props.currentUser ? (<Redirect to='/' /> ) : (<SignInSignUp /> )) }} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProp = (state) => ({
  currentUser : selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProp, mapDispatchToProps)(App);
