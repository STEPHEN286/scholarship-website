import React from 'react'

export default function Input({label}) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={label}>{label}</label>
      <input type="text"  className='border border-gray-100' id={label}/>
    </div>
  )
}
