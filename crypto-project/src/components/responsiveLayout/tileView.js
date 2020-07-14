import React from 'react'

const Tile = ({ title, content }) => (
    <div className='tile is-parent notification box'>
      <div className='tile is-child'>
        <p className='title'>{title}</p>
        <span className='content'>{content}</span>
      </div>
    </div>
  )

  export default Tile