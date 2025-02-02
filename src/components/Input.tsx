import React from 'react'

type InputProps = {
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div>
        <input 
            className='py-1 px-3 text-black focus:outline-none w-full'
            placeholder={placeholder}
        />

        <br/>
    </div>
  )
}

export default Input