import Image from 'next/image'
import React from 'react'
import SectionWrapper from './SectionWrapper';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {

  return (
    <SectionWrapper>
      <div className='flex'>

        <div className='w-[60%]'>
          <h1 className='text-5xl'>
            Hello, my name is <br/>SAM QUEEN
          </h1>

          <div className='mt-10'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I create Frontend User Interfaces.',
                2500, // wait 1s 
                'I create Web Applications.',
                2500,
                'I optimize Web Applications .',
                2500,
                'I create unique user experiences.',
                2500
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <p className='text-lg mt-10'>Welcome to my corner of the web! My name is Sam Queen and I am a passionate developer on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; its about turning ideas into functional websites.</p>
        </div>

        <div className='flex justify-center w-[40%]'>
          <Image 
            className='ml-20'
            src='/meaf2.jpg' 
            width={250} 
            height={0} 
            layout="intrinsic" 
            alt="profile" 
          />
        </div>
      </div>

    </SectionWrapper>
  )
}

export default AboutSection