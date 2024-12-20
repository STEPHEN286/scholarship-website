import React from 'react'

export default function TestimonialItem({image, name, role, testimonial, headline}) {
  return (
    <figure className="flex flex-col min-w-[300px]  w-[300px]     h-fit max-h-[300px]  gap-7 animate-marquee  items-center justify-center p-4 text-center bg-white  rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
    <figcaption className=" ">
            <img className="rounded-full w-9 h-9" src= {image} alt={name} />
            
        </figcaption>
        <blockquote className="  mb-1 text-gray-500  dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{headline}</h3>
            <p className="">{testimonial}</p>
        </blockquote>
        <div className="space-y-0.5 font-medium dark:text-white text-center  ">
                <div>{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
            </div>
    </figure>
  )
}
