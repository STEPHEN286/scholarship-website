import React from 'react'
import TestimonialItem from './TestimonialItem';
const scholarshipTestimonials = [
  {
    name: "Joseph McFall",
    role: "Graduate, Computer Science",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    headline: "Life-Changing Opportunity",
    message: "Receiving this scholarship allowed me to focus entirely on my studies without worrying about financial constraints. It truly transformed my future.",
  },
  {
    name: "Sarah Johnson",
    role: "Alumna, Engineering",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    headline: "Support Beyond Finances",
    message: "This scholarship was more than just financial aid—it was a sign of belief in my potential. I am forever grateful for the support.",
  },
  {
    name: "Emily Carter",
    role: "Graduate, Medicine",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    headline: "Empowered to Succeed",
    message: "Thanks to this scholarship, I was able to excel academically and pursue my passion without distractions. It opened doors I never thought possible.",
  },
  {
    name: "Michael Brown",
    role: "Student, Business Administration",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    headline: "Dreams Made Possible",
    message: "This scholarship lifted a huge burden off my family and gave me the freedom to chase my dreams. I couldn’t have done it without this support.",
  },
  {
    name: "Sophia Lee",
    role: "Scholar, Environmental Science",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    headline: "Achieving the Impossible",
    message: "This scholarship helped me achieve what seemed impossible. I am on the path to making a real difference in the world, thanks to this opportunity.",
  },
  {
    name: "David Wilson",
    role: "Graduate, Fine Arts",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/david-wilson.png",
    headline: "Unwavering Support",
    message: "The scholarship didn’t just help financially—it gave me the confidence to believe in myself and pursue my artistic dreams.",
  },
  {
    name: "Linda White",
    role: "Student, Education",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/linda-white.png",
    headline: "A New Beginning",
    message: "With this scholarship, I was able to overcome challenges and start a journey that I once thought was out of reach. I’m deeply thankful for this opportunity.",
  },
];

export default function TesmonialItems() {
  return (
    <div className='flex  w-full h-fit py-4  overflow-x-hidden   gap-8   rounded-lg shadow-sm dark:border-gray-700 md:mb-12  dark:bg-gray-800 '>
      {scholarshipTestimonials.map((scholar) =>(
        <TestimonialItem key={scholar.name} testimonial={scholar.message} name={scholar.name} image={scholar.image}  role={scholar.role} headline={scholar.headline}/>
      ))}

{scholarshipTestimonials.map((scholar) => (
      <TestimonialItem
        key={`${scholar.name}-duplicate`}
        testimonial={scholar.message}
        image={scholar.image}
        role={scholar.role}
      />
    ))}
    </div>
  )
}
