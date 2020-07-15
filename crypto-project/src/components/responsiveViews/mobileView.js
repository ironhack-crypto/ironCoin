import React from 'react';
import TabbedView from '../responsiveLayout/tabbedView';

const MobileView = ({ items }) => (
    <div className='container box'>
      <TabbedView items={items} />
    </div>
  )
  
  export default MobileView