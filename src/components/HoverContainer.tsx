"use client"
import React, { useState } from 'react'

type HoverContainerProps = {
    children: React.ReactNode;
    className?: string,
}

const HoverContainer: React.FC<HoverContainerProps> = ({ children, className='' }) => {
    const [handleHover, setHandleHover] = useState<boolean>(false);

    return (
        <div 
            onMouseEnter={() => {setHandleHover(true)}}
            onMouseLeave={() => {setHandleHover(false)}}
            className={`${className} cursor-pointer`}
        >
            {children}

            <div 
                className={`${handleHover ? 'w-full opacity-1' : 'w-[1px] opacity-0'} bg-white h-[1px] duration-500`}
            />
        </div>
    )
}

export default HoverContainer