

import React from 'react'
import { projects } from '../../../data'
import Image, { StaticImageData } from 'next/image'
import Button from '../Button';

type ProjectSectionProps = {
    projectKey: string | undefined;
}

const ProjectSection1 = ({ projectKey }: ProjectSectionProps) => {
    const project = projects.find(p => p.key === projectKey);

    return (
        <div  style={{ backgroundImage: `url(${project?.background})`}}
            className='max-w-[1500px] relative mx-auto top-0 left-0 bg-repeat-none bg-cover 
             text-white'
        >
            
            {/* opacity wrapper */}
            <div className='flex p-32 justify-between gap-20 bg-[rgba(10,10,10,0.8)]'>
                <div className='w-[320px]'>
                    <Image 
                        src={project?.imgPath || ''}
                        height={0}
                        width={320}
                        alt=""
                    />
                    <Button text="START DEMO" className='my-1' />
                    <Button text="GITHUB REPO" />
                </div>
                
                <div className='w-[calc(100%-320px)] flex flex-col justify-between'>
                    <div>
                        <h1 className='text-5xl  p-3'>{project?.name || ''}</h1>

                        <h1 className='text-lg  p-3 my-10'>{project?.desc || ''}</h1>
                    </div>

                    <ul className='flex gap-8'>
                        {project?.techStack.map((path: string | StaticImageData, index: number) => (
                            <li key={index}>
                                <Image 
                                    src={path}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ProjectSection1