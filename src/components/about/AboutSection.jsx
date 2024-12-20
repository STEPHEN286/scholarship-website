import React from 'react'
import AboutItems from './AboutItems'

export default function AboutSection() {
  return (
    <div className='flex bg-white flex-col justify-center items-center py-11 gap-6'>
      <h1 className='text-3xl font-bold'>About the Scholarship</h1>
      <AboutItems />
      <p>Our program aims to break financial barriers and empower talented individuals worldwide to achieve academic excellence and leadership potential</p>
    </div>
  )
}
