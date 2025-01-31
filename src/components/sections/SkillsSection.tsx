import React from 'react'
import SectionWrapper from './SectionWrapper'
import { skills } from '../../../data'
import Image from 'next/image'

const SkillsSection = () => {
  return (
    <SectionWrapper>

      <div>
        {skills.map((item, index) => (
          <div key={index} className='flex mb-16 items-center'>
            <p className='text-lg w-[250px]'>{item.skillType} :</p>

            {item.skillList.map((skill, index) => (
              <div key={index} className='cursor-pointer'>
                <Image 
                  src={skill.icon}
                  height={40}
                  width={40}
                  className='mx-auto mb-2'
                  alt=""
                />

                <p className='mx-10 text-sm'>{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    
    </SectionWrapper>
  )
}

export default SkillsSection