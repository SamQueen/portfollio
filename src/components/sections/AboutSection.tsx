import React from 'react'
import SectionWrapper from './SectionWrapper';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {

  return (
    <SectionWrapper>
      <div className='lg:flex'>

        <div className='lg:w-[60%]'>
          <h1 className='text-5xl'>
            Hello, my name is <br/>SAM QUEEN
          </h1>

          <img 
            src="/meaf5.png"
            className='lg:hidden h-[200px] mt-10 mx-auto'
            alt="profile photo"
          />

          <div className='mt-10 h-32 xl:h-auto'>
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
              style={{ fontSize: '1.8em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <p className='text-lg md:mt-10 '>Welcome to my corner of the web! My name is Sam Queen and I am a passionate developer on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; its about turning ideas into functional websites.</p>
        </div>

        <div className='flex justify-center w-[40%]'>
          <img 
            src="/meaf5.png"
            className='hidden lg:block md:h-[200px] lg:h-[250px] xl:h-[300px]'
            alt="profile photo"
          />
        </div>
      </div>

    </SectionWrapper>
  )
}

export default AboutSection