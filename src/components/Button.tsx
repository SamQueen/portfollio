import Link from 'next/link';
import React from 'react'

type ButtonProps = {
    text: string;
    className?: string;
    link: string;
}

const Button = ({ text, className, link }: ButtonProps) => {
  return (
    <Link href={link} target="_blank">
      <div className={`bg-blue-600 py-3 text-center text-white cursor-pointer ${className}`}>
        {text}
      </div>
    </Link>
  )
}

export default Button