import React from 'react'
import Input from '../ui/Input'

export default function ContactForm() {
  return (
    <form className='flex flex-col w-1/2 gap-6 ' >
     <Input label={"Your name"} />
     <Input label={"Your Email"} />
     <p className='w-full'>
      <p>Your message</p>
      <textarea name="" id="" cols="30" className='w-full' rows="5"></textarea></p>
      <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-0 "
        >
          Submit
          </a>
    </form>
  )
}
