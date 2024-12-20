import React from 'react'

const numbers = [1,2,3,4]
export default function Steps() {
  return (
   <ul className='list-none flex justify-between w-full '>
    {numbers.map((number, index) => (
      <li className='bg-green-500   text-2xl font-semibold
       rounded-full text-white' key={index}>{number}</li>
    ))
}
  </ul> 
  )

}
