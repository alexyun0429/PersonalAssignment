import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TimelineContent, TimelineItem } from '@mui/lab';
import { Typography } from '@mui/material';

import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import './Profile.css';


const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? 
          (<Typography className='timeline_text'>
            <span>{title}</span>{" "}
            <a href={link} target='_black'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timeline_text'>
            <span>{title}</span>{text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

const Profile = () => {
  return (
    <div className='profile container_shade'>
      <div className='profile_name'>
      <Typography className='name'>{resumeData.name}</Typography>
      <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/profile-photo.jpeg')} alt='profilePhoto' />
      </figure>

      <div className='profile_info'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name: ' text={resumeData.name} />
          <CustomTimelineItem title='DOB: ' text={resumeData.DOB} />
          <CustomTimelineItem title='Occupation: ' text={resumeData.occupation} />
          <CustomTimelineItem text={resumeData.email} />
          
          {/* Mapping to object */}
          {Object.keys(resumeData.social).map(key => (
            <CustomTimelineItem text={resumeData.social[key].text} link={resumeData.social[key].link} />
          ))}
        </CustomTimeline>
        <br/>
        <button>Submit</button>
      </div>
    </div>
  )
} 
{/* <TimelineItem>
<CustomTimelineSeparator />
<TimelineContent>Code</TimelineContent>
</TimelineItem> */}

export default Profile;