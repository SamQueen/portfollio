import Image from 'next/image'
import React from 'react'
import SectionWrapper from './SectionWrapper';

const AboutSection = () => {

  return (
    <SectionWrapper>
      <div className='flex'>

        <div className='w-[60%]'>
          <h1 className='text-5xl'>
            Hello, my name is <br/>SAM QUEEN
          </h1>


          <p className='text-lg mt-10'>Welcome to my corner of the web! My name is Sam Queen and I am a passionate developer on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; its about turning ideas into functional websites.</p>
        </div>

        <div className='flex justify-center w-[40%]'>
          <Image 
            className='ml-20'
            src='/meaf2.jpg' 
            height={300} 
            width={180} 
            alt="profile" 
          />
        </div>
      </div>

    </SectionWrapper>
  )
}

export default AboutSection