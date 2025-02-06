"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const SettingSelect = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [settingIndex, setSettingIndex] = useState(0);

    const focusStyle = "border-4 border-white";

    const handleItemSelect = (index: number) => {
        setSettingIndex(index);
    }
    
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            
            if (event.key == 's' || event.key == 'ArrowDown') {
                setSettingIndex(settingIndex + 1);
            }

            if (event.key == 'w' || event.key == 'ArrowUp') {
                setSettingIndex(settingIndex - 1);
            }
        }

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, [settingIndex]);

    return (
        <div className='px-5 md:px-20 lg:px-32 flex-1 overflow-hidden'>
            
            <div className="overflow-y-auto h-full custom-scrollbar bottom-fade">
                {arr.map((item, index) => (
                    <div 
                        key={index}
                        className={`${(index === settingIndex) && focusStyle} px-2 pt-2 mb-5 cursor-pointer mr-2`}
                        onClick={() => { handleItemSelect(index) }}
                    >
                        <div className='flex'>
                            <Image
                                src="/icons/git.svg"
                                width={40}
                                height={40}
                                alt=""
                            />
                            
                            <p className="text-2xl ml-5 w-full">This is a setting item</p>
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