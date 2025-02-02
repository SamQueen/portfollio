import React from 'react'
import SectionWrapper from './SectionWrapper'
import Job from '../Job'
import { jobDetails } from '../../../data'
import { JobType } from '../../../types'

const ExperienceSection = () => {
  const jobs = jobDetails;
  
  return (
    <SectionWrapper>
      <h1 className='text-5xl'>EXPERIENCE</h1>
      
      {jobs.map((job: JobType, index) => (
       <div key={index}>
         <Job 
          job={job}
         />
       </div>
      ))}
    </SectionWrapper>
  )
}

export default ExperienceSection