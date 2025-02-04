import React from 'react'
import BackButton from '../BackButton';

type SectionWrapperProps = {
    children?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  
  return (
    <div className='bg-[rgba(50,28,62,0.9)] text-white p-10 lg:ml-[170px] xl:ml-[350px] 
         lg:w-[calc(100%-250px)] xl:w-[calc(100%-350px)] items-center]'
    >
      <BackButton />
      
      {children}
    </div>
  )
}

export default SectionWrapper