import React from 'react';
import Homepage from './page-components/homepage/homepage';
import './page-components/homepage/homepage.styles.scss';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
    </div>
  );
}

export default App;
