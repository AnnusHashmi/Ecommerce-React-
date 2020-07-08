import React from 'react';
import Homepage from './page-components/homepage/homepage';
import './page-components/homepage/homepage.styles.scss';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import ShopPage from './page-components/shopPage/shopPage';
import SignInSignUp from './page-components/signIn-signUp/signIn-signUp'
import './App.css'

function App() {
  return (
    <div>

      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
      
    </div>
  );
}

export default App;
