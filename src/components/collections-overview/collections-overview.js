import React from 'react';
import CollectionPreview from '../previewCollection/previewCollections';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop-data/shopData-selector';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
    return(
      <div className='collections-overview'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    )
    
}

const mapStateFromProps = (state) => ({
    collections : selectCollection(state)
  })

export default connect(mapStateFromProps)(CollectionsOverview);