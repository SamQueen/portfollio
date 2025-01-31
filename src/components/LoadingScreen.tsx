"use client"

import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return (
            <div className='absolute top-0 left-0 h-screen w-full z-10 flex items-center justify-center bg-red-300'>
                LoadingScreen
            </div>
        )
    }
    
    return(
        <></>
    )
}

export default LoadingScreen