"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HoverContainer from './HoverContainer';
import { navOptions } from '../../data';
import { NavOption } from '../../types';

type NavigatorProps = {
    showNav: boolean;
}

const Navigator: React.FC<NavigatorProps> = ({ showNav }) => {
    const [time, setTime] = useState('00:00:00');
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    // play audio
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // reset to begining of audio file
            audioRef.current.play();
        }
    }

    useEffect(() => {
        const calcTime = () => {
            const dateTime = new Date();
            const hours = dateTime.getHours();
            let minutes: string = dateTime.getMinutes().toString();
            //const seconds = dateTime.getSeconds();

            const meridian = (hours <= 12) ? 'AM' : 'PM';

            // add leading 0 if neccessary
            if (Number(minutes) < 10) {
                minutes = '0' + minutes;
            }

            const timeString = (hours % 12) + ':' + minutes + ' ' + meridian;
            setTime(timeString);
        }

        calcTime();
        setInterval(calcTime, 10000); // execute time calculation every 10 seconds
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!showNav) {
                return;
            }

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                /// prevent negetive index
                if (currentIndex === 0) {
                    return;
                }

                const nextIndex = currentIndex - 1;
                setCurrentIndex(nextIndex);
                playAudio();
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                // prevents a out of bound item index
                if (currentIndex === (navOptions.length - 1)) {
                    return;
                }
                
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);
                playAudio();
            }
        }

        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [setCurrentIndex, currentIndex, showNav]);

    const handleItemClick = (index: number) => {
        setCurrentIndex(index);
        playAudio();
    }

    return (
        <nav className={`${showNav && "pt-[300px]"} min-h-32 duration-500 px-10 text-white text-xl tracking-wide relative`}>
            
            <audio ref={audioRef} src="/audio/select6.wav" />
            
            <div 
                className={`absolute top-10 cursor-pointer`}
                onClick={() => {} }
            >
                <Image 
                    src='/icons/bars.svg'
                    alt='Bars icon'
                    width={25}
                    height={25}
                />
            </div>
            
            <div className={` flex justify-between absolute top-10 w-full pr-20`}>
                <div 
                    className='cursor-pointer'
                    onClick={() => {} }
                >
                    
                </div>
                
                <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 bg-blue-400 border border-blue-700 rounded-full'></div>
                    
                    <Image 
                        src='/profile1.webp'
                        alt='Ghost of Tsushima'
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

                <div className='flex gap-2 items-center'>            
                    <Image 
                        src='/icons/trophy.svg'
                        alt='Trophy Icon'
                        width={30}
                        height={30}
                    />
                    <p>238</p>
                </div>
                
                <div className=''>{time}</div>
            </div>

            <div className={`${!showNav && 'hidden'} duration-500 flex justify-center items-baseline w-full gap-20 mb-10`}>
                {navOptions.map((item: NavOption, index:number) => (
                    <div 
                        key={index} 
                        className={`${(currentIndex == index) ? 'border-white' : 'border-transparent'} cursor-pointer p-3 border-b-2`}
                        onClick={() => { handleItemClick(index) }}
                    >
                        <Image 
                            src={item.iconPath}
                            alt={item.alt}
                            width={30}
                            height={30}
                        />
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navigator