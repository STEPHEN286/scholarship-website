import React from 'react'
import TesmonialItems from './TesmonialItems'

export default function Testimonial() {
  return (
<div className="py-11 flex flex-col items-center gap-8 w-full h-fit">
  <h1 className='font-bold text-3xl'>Testimonials</h1>
  <TesmonialItems />
</div>

  )
}
