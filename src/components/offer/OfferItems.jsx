import React from 'react'
import OfferItem from './OfferItem';
import { CurrencyDollarIcon, AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/solid';


const scholarshipInfo = [
  {
    icon: CurrencyDollarIcon  ,
    title: 'Eligibility Criteria',
    description: ['Open to students aged 18-25 worldwide'],
  },
  {
    icon: AcademicCapIcon  ,
    title: 'Award Coverage',
    description: ['Tuition fees', 'Accommodation', 'Monthly stipend'],
  },
  {
    icon: CalendarIcon  ,
    title: 'Application Timeline',
    description: [
      'Applications close: March 31, 2025',
      'Decisions by: May 15, 2025',
    ],
  },
];

export default function OfferItems() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'> 
      {
        scholarshipInfo.map((item) =>(
          <OfferItem key={item.title} icon={item.icon} title={item.title} descriptions={item.description} />
        ))
      }
    </div>
  )
}
