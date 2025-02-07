

import React from 'react'
import { projects } from '../../../data'
import Image from 'next/image'
import Button from '../Button';
import BackButton from '../BackButton';
import TechStack from '../TechStack';

type ProjectSectionProps = {
    projectKey: string;
}

const ProjectSection = ({ projectKey }: ProjectSectionProps) => {
    const project = projects.find(p => p.key === projectKey);

    if (!project) return <></>

    return (
        <div  style={{ backgroundImage: `url(${project.background})`}}
            className='relative mx-auto bg-repeat-none bg-cover bg-center text-white'
        >
            {/* opacity wrapper */}
            <div className=' px-5 md:px-20 xl:px-32 py-10 md:py-20 bg-[rgba(10,10,10,0.8)]'>

                <BackButton />
                <div className='lg:flex justify-between gap-20'>
                    <div className='hidden lg:block w-[320px]'>
                        <Image 
                            src={project?.imgPath || ''}
                            height={0}
                            width={320}
                            alt=""
                        />
                        <Button link={project.demoLink} text="START DEMO" className='my-1' />
                        <Button link={project.gitLink} text="GITHUB REPO" />
                    </div>
                    
                    <div className='w-full lg:w-[calc(100%-320px)] flex flex-col justify-between'>
                        <div>
                            <h1 className='text-2xl md:text-5xl  p-3'>{project?.name || ''}</h1>

                            <div className='lg:hidden w-[250px] mt-10 mx-auto'>
                                <Image 
                                    src={project.imgPath || ''}
                                    height={0}
                                    width={250}
                                    alt=""
                                />
                                <Button link={project.demoLink} text="START DEMO" className='my-1' />
                                <Button link={project.gitLink} text="GITHUB REPO" />
                            </div>

                            <h1 className='text-lg  p-3 my-10'>{project?.desc || ''}</h1>
                        </div>

                        <TechStack 
                            stack={project.techStack}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectSection