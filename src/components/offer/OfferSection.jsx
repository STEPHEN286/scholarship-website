import React from 'react'
import OfferItems from './OfferItems'

export default function OfferSection() {
  return (
    <div className=' py-11 flex flex-col items-center gap-8'>
      <h1 className='font-bold  text-3xl '>What We Offer</h1>
      <OfferItems />
    </div>
  )
}
