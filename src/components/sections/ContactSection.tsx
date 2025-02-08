import React from 'react'
import SectionWrapper from './SectionWrapper'
import Input from '../Input'
import Image from 'next/image'
import { socials } from '../../../data'
import Link from 'next/link'

const ContactSection = () => {
  
  
  return (
    <SectionWrapper>
      <h1 className='text-2xl md:text-5xl mb-10 text-center'>CONTACT ME</h1>

      <form className='flex flex-col gap-5 max-w-[500px] mx-auto'>
        <Input placeholder='Name' />
        <Input placeholder='Email' type="email" />
        <Input placeholder='Subject' />
        <textarea className='focus:outline-none py-1 px-3 text-black' placeholder='Message' />

        <div className='w-full bg-[rgba(0,0,0,0.5)] py-3 text-center cursor-pointer hover:bg-[rgba(0,5,0,0.9)] duration-500'>
          SEND
        </div>
      </form>

      <p className='my-10 text-center text-xl'>or</p>

      <ul className='mx-auto flex justify-center gap-10 items-center'>
        {socials.map((item, index: number) => (
          <li key={index} className='cursor-pointer'>
            <Link href={item.link} target='_blank'>
              <Image 
                src={item.imgPath}
                height={35}
                width={35}
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default ContactSection