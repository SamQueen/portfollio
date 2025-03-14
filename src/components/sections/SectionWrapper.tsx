import React from 'react'
import BackButton from '../BackButton';
import * as motion from "motion/react-client"

type SectionWrapperProps = {
    children?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.3,
          scale: { type: "spring", visualDuration: 0.3, bounce: 0.4 },
      }}
      className='bg-[rgba(33,33,34,0.9)] text-white p-10 lg:ml-[170px] xl:ml-[350px] 
      lg:w-[calc(100%-250px)] xl:w-[calc(100%-350px)] items-center]'
    >
      <BackButton />
      
      {children}
    </motion.div>
  )
}

export default SectionWrapper