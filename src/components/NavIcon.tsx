import { RootState } from '@/lib/store';
import React from 'react'
import { useSelector } from 'react-redux';

type NavIconProps = {
    openNav: () => void;
}

const NavIcon = ({ openNav } : NavIconProps) => {
  
    const focusNav = useSelector((state: RootState) => state.focusNav);

    return (
        <div 
            className='h-8 w-8 flex flex-col justify-between mt-10 cursor-pointer'
            onClick={() => { openNav() }}
        >
            <div className={`${focusNav && 'rotate-45 translate-y-[350%]'} duration-500 w-full h-[4px] bg-white`}></div>
            
            <div className={`${focusNav && 'hidden'} duration-500 w-full h-[4px] bg-white`}></div>
            
            <div className={`${focusNav && '-rotate-45 translate-y-[-350%]'} duration-500 w-full h-[4px] bg-white`}></div>
        </div>
    )
}

export default NavIcon