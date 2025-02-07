"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { settingOptions } from '../../data'

const SettingSelect = () => {
    const [settingIndex, setSettingIndex] = useState(0);

    const focusStyle = "border-4 border-white";

    const handleItemSelect = (index: number) => {
        setSettingIndex(index);
    }

    return (
        <div className='px-5 md:px-20 lg:px-32 flex-1 overflow-hidden'>
            
            <div className="overflow-y-auto h-full custom-scrollbar bottom-fade pb-16">
                {settingOptions.map((option, index) => (
                    <div 
                        key={index}
                        className={`${(index === settingIndex) && focusStyle} px-2 pt-2 mb-5 cursor-pointer mr-2`}
                        onClick={() => { handleItemSelect(index) }}
                    >
                        <div className='flex mb-2'>
                            <Image
                                src={option.imgPath}
                                width={30}
                                height={30}
                                alt=""
                            />
                            
                            <p className="text-lg md:text-2xl ml-5 w-full">{option.name}</p>
                        </div>

                        {/* line */}
                        {(settingIndex !== index) && (
                            <div className='w-[calc(100%-60px)] ml-auto h-[1px] bg-gray-300'></div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default SettingSelect