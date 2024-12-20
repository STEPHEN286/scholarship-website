import React from 'react'

export default function OfferItem({icon:Icon, title, descriptions }) {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white  text-left max-h-[300px] h-[200px]  rounded-lg dark:bg-gray-800 dark:border-gray-700">
     <Icon className="h-8 w-8 text-green-500" />
    <p href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </p>
    <ul className="list-none  text-gray-600">
            {descriptions.map((desc, i) => (
              <li key={i} className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
               <span> {desc}</span>
                </li>
            ))}
          </ul>
    {/* <p href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </p> */}
</div>

    </div>
  )
}
