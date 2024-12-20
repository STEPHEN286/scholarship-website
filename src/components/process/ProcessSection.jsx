import React from 'react'


import ApplicationProcess from './ApplicationProcess'

export default function ProcessSection() {
  return (
    <div className='flex flex-col  items-center gap-8 py-11 bg-white'>
      <h1 className='font-bold text-3xl'>Application Process</h1>
      
      <ApplicationProcess />
    </div>
  )
}
