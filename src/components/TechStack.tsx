import React from 'react'
import { TechStack as TechStackType } from '../../types';
import Image from 'next/image';

type TechStackProps = {
    stack: TechStackType[];
}

const TechStack = ({ stack } : TechStackProps) => {

    return (
        <ul className='flex gap-8'>
            {stack.map((item: TechStackType , index: number) => (
                <li key={index} 
                    className='cursor-pointer flex flex-col items-center justify-end'
                >
                    <Image 
                        src={item.imgPath}
                        width={32}
                        height={32}
                        style={{ width: "100%", height: "auto", maxWidth: "32px" }}
                        alt=""
                    />

                    <span className={`hidden lg:block text-sm mt-2`}>{item.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default TechStack