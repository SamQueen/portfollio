"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SlideItem } from '../../types';
import { slideItems } from '../../data';
import { useDispatch } from 'react-redux';
import { disableNav, disableSlide, enableBottom, setSection } from '@/lib/slice';

type SliderProps = {
    focusSlider: boolean;
}

const Slider: React.FC<SliderProps> = ({ focusSlider }) => {
    const [itemIndex, setItemIndex] = useState(0);
    const [animationLock, setAnimationLock] = useState(false);
    const [windowSize, setWindowSize] = useState(0);
    const [maxRightTranslate, setMaxRightTranslate] = useState(500);

    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useDispatch();
    const translateAmount = 210;
    const screenBreakPoint = 1100;
    const mobileScreenBreakPoint = 710;
    const focusStyle = 'border-4 border-white bg-black items-center'

    // init offset carousel items 
    useEffect(() => {
        const setItemsBounds = () => {
            const windowWidth = window.innerWidth;
            const itemsOnScreen = Math.floor((windowWidth - 250) / 200) + 1;
            
            setMaxRightTranslate((slideItems.length - itemsOnScreen) * translateAmount);
            setWindowSize(windowWidth);

            const slideItemElements = document.querySelectorAll<HTMLElement>('.slide-item');

            // offset items on larger screen
            slideItemElements.forEach((item) => {
                if (windowWidth >= screenBreakPoint) {
                    item.style.transform = `translateX(${translateAmount}px)`;
                } else {
                    item.style.transform = `translateX(${10}px)`;
                }
            });
        }
        
        setItemsBounds();

        window.addEventListener('resize', setItemsBounds);

        return () => {
            window.removeEventListener('resize', setItemsBounds);
        }
    }, []);

    // play audio
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // reset to begining of audio file
            audioRef.current.play();
        }
    }

    // set animation lock to prevent user from sliding too fast
    const lockAnimation = () => {
        setAnimationLock(true);

        setTimeout(() => {
            setAnimationLock(false);
        }, 100); // set to 200 millliseconds
    }

    const slideTo = (dIndex: number) => {
        const slideItems = document.querySelectorAll<HTMLElement>('.slide-item');
        let shiftAmount = Math.min((translateAmount * (dIndex - 1)), maxRightTranslate);

        // check if slider is focused
        if (!focusSlider) {
            return;
        }

        // check if animation is lock
        if (animationLock) {
            return;
        }

        lockAnimation();

        // prevent offset shift on smaller screem
        if (windowSize <= screenBreakPoint && shiftAmount < 0) {
            shiftAmount = 0;
        }

        // prevent ignored first shift at index 0
        if (windowSize <= mobileScreenBreakPoint) {
            shiftAmount = translateAmount * (dIndex) - 25;
        }

        // check if at beginning or end of slide prevent out-of-bounds
        if (dIndex < 0 || dIndex >= slideItems.length) {
            return
        }

        playAudio();
        
        slideItems.forEach((item) => {
            item.style.transform = `translateX(${-(shiftAmount)}px)`;
        });

        setItemIndex(dIndex);
    }

    // add event listeners
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                slideTo(itemIndex-1);
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                slideTo(itemIndex+1);
            }

            if (event.key === 's' || event.key === 'ArrowDown' || event.key === 'Enter') {       
                const section: string = slideItems[itemIndex].section;
                
                if (focusSlider) {
                    handleSelect(section);
                }
            }
        }
        
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [itemIndex, animationLock, focusSlider]);

    const handleSelect = (sectionName: string) => {
        dispatch(setSection(sectionName));
        dispatch(disableNav());
        dispatch(disableSlide());
        dispatch(enableBottom());
    }

    return (
        <div className={`absolute translate-x-[-2.5rem] w-screen h-[300px] flex gap-2 
                        overflow-x-hidden overflow-y-auto`}>
            
            <audio ref={audioRef} src="/audio/select-5.wav" />

            {slideItems.map((item: SlideItem, index: number) => (
                <div 
                    key={index}
                    onClick={() => {slideTo(index)}}
                    className={`slide-item flex-grow-0 flex-shrink-0 cursor-pointer transform transition-transform duration-500 
                               relative ${(index === itemIndex && focusSlider) && focusStyle}`}
                >
                    <Image 
                        src={item.imgPath}
                        alt='Ghost of Tsushima'
                        width={(index === itemIndex && focusSlider) ? 250 : 200}
                        height={50}
                    />

                    <div 
                        onClick={() => {handleSelect(item.section)}}
                        className={`${(index != itemIndex || !focusSlider) && 'hidden'} h-[46px] duration-500 absolute bottom-0 w-full
                                    flex items-center justify-center text-white bg-blue-600`}
                    >
                        <p className='tracking-wider text-lg'>Start</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Slider