import React from 'react'
import Tabs from './Tabs.js';
const PokimonThumbnails = ({id, name, image, type}) => {
  const style = `thumb-container ${type}`
  return (
    <div className={style}>
        {/* <Tabs /> */}
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='detail-wrapper'>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokimonThumbnails