import React from 'react'
import { AcademicCapIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/solid';
import AboutItem from './AboutItem';

const scholarshipFeatures = [
    {
        id: 1,
        icon: AcademicCapIcon, // Icon for Leadership
        title: "Leadership",
        description: "Fostering future leaders who can drive positive change and inspire others through their actions and vision."
    },
    {
        id: 2,
        icon: GlobeAltIcon, // Icon for Innovation
        title: "Innovation",
        description: "Encouraging creative thinking and innovative approaches to solving global challenges."
    },
    {
        id: 3,
        icon: UsersIcon, // Icon for Community Impact
        title: "Community Impact",
        description: "Supporting initiatives that create lasting positive change in communities worldwide."
    }
];

export default function AboutItems() {
  return (
    <div className='flex justify-between gap-6 '>
      {
        scholarshipFeatures.map((feature) => (
          <AboutItem key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} />
        ))
}
    </div>
  )
}
