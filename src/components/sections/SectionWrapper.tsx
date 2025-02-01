import { disableBottom, enableSlide, setSection } from '@/lib/slice';
import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image';

type SectionWrapperProps = {
    children?: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(enableSlide());
    dispatch(disableBottom());
    dispatch(setSection(''));
  }
  
  return (
    <div className='bg-[rgba(50,28,62,0.9)] text-white p-10 lg:ml-[200px] xl:ml-[350px] 
                  lg:w-[calc(100%-250px)] xl:w-[calc(100%-350px)] items-center]'>
      <div
        onClick={() => {handleClose()}}
        className='bg-white w-10 h-10 cursor-pointer flex justify-center items-center mb-10'
      >
        <Image
          src="/icons/arrow-up-solid.svg"
          alt="Back"
          width={20}
          height={20}
        />
      </div>
        
      {children}
    </div>
  )
}

export default SectionWrapper