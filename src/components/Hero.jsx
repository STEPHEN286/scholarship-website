import React from 'react'
import video from "../asset/206779_tiny.mp4"


export default function Hero() {
  return (
   

<section className="relative h-[600px] overflow-hidden  dark:bg-gray-900">
 
  <video 
    className="absolute top-0 left-0 w-full h-full object-cover" 
    autoPlay 
    loop 
    muted 
    playsInline>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>


  
    <div className="text-center relative z-10 py-8 flex flex-col justify-center px-4 mx-auto max-w-screen-xl  lg:py-16  h-full">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
        Empowering Dreams Through Education
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Fully-funded scholarships to unlock your potential
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-0 "
        >
          Apply Now
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Learn more
        </a>
      </div>
    </div>
    
  

 
  <div className="absolute inset-0 bg-black bg-opacity-80 z-[5]"></div>
</section>


  )
}
