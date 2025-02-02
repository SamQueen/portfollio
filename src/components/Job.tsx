import React from 'react'
import Image from 'next/image'
import { JobType } from '../../types'

type JobProps = {
    job: JobType;
}

const Job: React.FC<JobProps> = ({ job }) => {

    return (
        <div className='mt-16 mb-32'>
            <div className='flex items-center'>
            <Image 
                src={job.imgPath}
                width={50}
                height={50}
                alt="GBCS"
            />

            <p className='ml-5 text-2xl'>{job.company} - {job.title}</p>
            </div>

            <p className='mt-5'>{job.desc}</p>

            <ul className=' mt-5 flex items-center'>
                {job.techStack.map((tech, index: number) => (
                    <div key={index} className='mr-3 cursor-pointer relative'>
                        <Image 
                            src={tech.imgPath}
                            width={25}
                            height={25}
                            alt="tech"
                        />

                        <div className='text-sm hidden'>
                            <p>{tech.name}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Job