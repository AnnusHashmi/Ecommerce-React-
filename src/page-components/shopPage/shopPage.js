import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview'; 
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collection';

const ShopPage = ({match}) => {
 
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/collectionId`} component={CollectionPage} />
      </div>
    );
  }




export default (ShopPage);
