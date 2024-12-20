import React from 'react'

import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='flex flex-col items-center w-full py-11'>
      <p className='font-bold text-3xl'>Contact Us</p>
    <div className='flex justify-center gap-8 w-full'>
      <ContactForm />
    
    <div className='w-1/3 flex flex-col gap-7 '>
      <div>
        <p className='text-green-700 font-bold'>Email</p>
        <p className='text-gray-500'>kwofie28@gmailcom</p>
      </div>
      <div>
        <p className='text-green-700 font-bold'>Phone Number</p>
        <p className='text-gray-500'>+233 578032810</p>
      </div>
      <div>
        <p className='text-green-700 font-bold'>Email</p>
        <p className='text-gray-500'>kwofie28@gmailcom</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Contact