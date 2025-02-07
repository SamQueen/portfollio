"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const BackArrow = () => {
    const router = useRouter();

    return (
        <div>
            <Image 
                src="/icons/arrow-up-solid2.svg"
                alt="Back"
                width={25}
                height={25}
                className="rotate-[-90deg] mr-10 cursor-pointer hover:opacity-50 duration-500"
                onClick={() => {router.back()}}
            />
        </div>
    )
}

export default BackArrow