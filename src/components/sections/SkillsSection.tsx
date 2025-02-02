import React from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../../../data'
import Image from 'next/image'

const SkillsSection = () => {
  return (
    <SectionWrapper>

      <div>
        {skills.map((item, index) => (
          <div key={index} className='mb-16 items-center overflow-auto'>
            <p className='text-lg mb-5'>{item.skillType} :</p>

            <div className='flex'>
              {item.skillList.map((skill, index) => (
                <div key={index} className='cursor-pointer animate-skill-items'>
                  <Image 
                    src={skill.icon}
                    height={40}
                    width={40}
                    className='mx-auto mb-2 hover:scale-[120%] duration-500'
                    alt=""
                    priority
                  />

                  <p className='mx-10 text-sm'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    
    </SectionWrapper>
  )
}

export default SkillsSection