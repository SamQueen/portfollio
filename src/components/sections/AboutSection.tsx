import Image from 'next/image'
import React from 'react'
import SectionWrapper from './SectionWrapper';
import HoverContainer from '../HoverContainer';

const AboutSection = () => {

  return (
    <SectionWrapper>
      <div className='flex items-center'>
        <h1 className='text-5xl lg:flex'>
            Hello, my name is 
            <HoverContainer className='ml-5'>SAM QUEEN</HoverContainer>
        </h1>

        <Image 
          className='ml-20'
          src='/meaf2.jpg' 
          height={250} 
          width={150} 
          alt="profile" 
        />
      </div>

      <p className='text-lg mt-10'>Welcome to my corner of the web! My name is Sam Queen and I am a passionate developer on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; it's about turning ideas into functional websites.</p>
    </SectionWrapper>
  )
}

export default AboutSection