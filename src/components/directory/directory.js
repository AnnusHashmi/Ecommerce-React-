import React from 'react';
import MenuItem from '../menuItem/menuItem';
import {connect} from 'react-redux';
import {selectDirectorySection} from '../../redux/directory/directory-selector'

const Directory = ({ sections }) => {

    return(
      <div className = 'directory-menu'>
        {
          sections.map((section) => {
            return(
              <MenuItem key={section.id} imageUrl={section.imageUrl} title={section.title} size={section.size} linkUrl={section.linkUrl} />
            )
            
          })
        }
      </div>
  )
  
}

const mapStateToProps = (state) => ({
  sections : selectDirectorySection(state)
})

export default connect(mapStateToProps)(Directory);