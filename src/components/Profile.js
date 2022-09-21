import React from 'react'
import Tabs from './Tabs';
import '../styles/profile.css'
import Select from './Select.js';
function Profile() {
  return (
    <div>
      <div className='Container'>
        <div className='profile'>
          Profile
        </div>
      </div>
      <div className='lickes'>
          Licked 0
        </div>

        {/* <hr/> */}
        
        <div className='featured'>
          <Select />
        </div>
        <Tabs />
    </div>
  )
}

export default Profile