import React from 'react'

type InputProps = {
    placeholder?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type="text" }) => {
  return (
    <div>
        <input 
            className='py-1 px-3 text-black focus:outline-none w-full'
            type={type}
            placeholder={placeholder}
        />

        <br/>
    </div>
  )
}

export default Input