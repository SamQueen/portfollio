import React from 'react'

type ButtonProps = {
    text: string;
    className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <div className={`bg-blue-600 py-3 text-center text-white cursor-pointer ${className}`}>
        {text}
    </div>
  )
}

export default Button