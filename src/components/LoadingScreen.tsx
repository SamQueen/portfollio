"use client"
import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

/* styles */
const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3500);
    }, []);

    if (!isLoading) {
        return (
            <></>
        )
    }

        return (
            <motion.div 
                className='absolute top-0 left-0 h-screen w-full z-20 flex items-center justify-center bg-black'
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                key="box"
            >
                
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    animate="visible"
                    style={image}
                >
                    <motion.circle
                        cx="100"
                        cy="300"
                        r="80"
                        stroke="white"
                        variants={draw}
                        custom={2}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="230"
                        x2="360"
                        y2="370"
                        stroke="white"
                        custom={3}
                        variants={draw}
                        style={shape}
                    />
                    <motion.line
                        x1="220"
                        y1="370"
                        x2="360"
                        y2="230"
                        stroke="#0d63f8"
                        custom={3.5}
                        variants={draw}
                        style={shape}
                    />
                    <motion.rect
                        width="140"
                        height="140"
                        x="410"
                        y="230"
                        rx="20"
                        stroke="white"
                        custom={4}
                        variants={draw}
                        style={shape}
                    />
                </motion.svg>

            </motion.div>
        )
}

export default LoadingScreen