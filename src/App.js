import React, { Component } from 'react';
import Homepage from './page-components/homepage/homepage';
import './page-components/homepage/homepage.styles.scss';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import ShopPage from './page-components/shopPage/shopPage';
import SignInSignUp from './page-components/signIn-signUp/signIn-signUp';
import {auth, createUserProfile} from './firebase/firebase.utils';
import './App.css'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-actions';

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
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) 
})

export default connect(null, mapDispatchToProps)(App);
