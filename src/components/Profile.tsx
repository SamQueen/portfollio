import React from 'react'
import Image from 'next/image'
import HoverContainer from './HoverContainer'

type ProfileProps = {
    className?: string;
}

const Profile = ({ className } : ProfileProps ) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        <div className='h-3 w-3 bg-blue-400 border border-blue-700 rounded-full'></div>
        
        <Image 
            src='/profile1.webp'
            alt='Profile Photo'
            width={50}
            height={50}
            className='rounded-full'
        />

        <HoverContainer>
            <p>
                <span className='text-blue-300'>@</span>
                SamQueenDev
            </p>
        </HoverContainer>
    </div>
  )
}

export default Profile