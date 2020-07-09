import React, { Component } from 'react';
import Homepage from './page-components/homepage/homepage';
import './page-components/homepage/homepage.styles.scss';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import ShopPage from './page-components/shopPage/shopPage';
import SignInSignUp from './page-components/signIn-signUp/signIn-signUp';
import {auth} from './firebase/firebase.utils';
import './App.css'
import { render } from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
  
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
