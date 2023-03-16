import { Typography } from '@mui/material';
import React from 'react'

import './Profile.css'

const Profile = () => {
  return (
    <div className='profile container_shade'>
      <div className='profile_name'>
      <Typography className='name'>JaeWon Yun</Typography>
      <Typography className='title'>Creative Developer</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/profile-photo.jpeg')} alt='' />
      </figure>

      <div className='profile_info'>
        insert timeline
        <br/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Profile;