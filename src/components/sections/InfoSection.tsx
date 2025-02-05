import React from 'react'
import SectionWrapper from './SectionWrapper'
import Image from 'next/image'

const InfoSection = () => {
    const data = [
      {
        title: "React",
        imagePath: '/icons/react.svg',
        list: [
          {item: 'Component-based architecture means less code!'},
          {item: "Redux can make state management easier."},
          {item: "Unidirectional data flow via component props."},
        ]
      },
      {
        title: "Next.js",
        imagePath: '/icons/next.svg',
        list: [
          {item: 'Optimized Search Engine Optimization (SEO)'},
          {item: "Improved SEO. It's nice to be seen!"},
          {item: "Server-side rendering for optimized page load times."},
          {item: "Better image optimization than relying on React."},
          {item: "File-based routing"},
        ]
      },
      {
        title: "Tailwind CSS",
        imagePath: '/icons/tailwindcss.svg',
        list: [
          {item: "No need to come up with an infinite number of unique class names!"},
          {item: "Unused CSS is automatically purged greatly reducing page loading times."},
          {item: "Less code!"},
          {item: "Large community help and support."},
        ]
      },
      {
        title: "Redux",
        imagePath: '/icons/redux.svg',
        list: [
          {item: "Simplified global state management prevents complicated prop nesting."},
          {item: "State updates are predictable and follow a predetermined pattern."},
          {item: "Great debugging tools offered."},
        ]
      }
    ]
    
    return (
      <SectionWrapper>
          <h1 className='text-2xl md:text-5xl'>Application Info</h1>
          <p className='text-lg mt-5'>This is my PlayStation 4-inspired personal portfolio designed using modern technologies like Next.js, React, Tailwind CSS, and Redux. This application was designed to capture the sleek, unique PS4 console user interface. It includes similar features like interactive elements, carousel-style project showcase, modal-based notification, and Redux-powered state management for simple and seamless performance. Fully responsive and optimized for quick loading time, this portfolio application offers a unique, gaming-like experience.</p>
      
          <div className='mt-20'>
            {data.map((item, index) => (
              <div key={index} className='mb-10'>
                
                <div className='flex items-center'>
                  <Image 
                    src={item.imagePath}
                    height={35}
                    width={35}
                    className='mr-5'
                    alt=""
                  />
                  <p className='text-xl'>{item.title}</p>
                </div>
    

                <ul className='mt-5 ml-5 list-disc'>
                  {item.list.map((listItem, index) => (
                    <li className='my-2' key={index}>{listItem.item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </SectionWrapper>
    )
}

export default InfoSection