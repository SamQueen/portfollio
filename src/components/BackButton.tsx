import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { disableBottom, enableSlide, setSection } from '@/lib/slice';

const BackButton = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
      dispatch(enableSlide());
      dispatch(disableBottom());
      dispatch(setSection(''));
    }
  
    return (
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
    )
}

export default BackButton