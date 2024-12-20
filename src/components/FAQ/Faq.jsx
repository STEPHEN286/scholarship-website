import { useState } from "react";

export default function Faq() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Who is eligible to apply?",
      answer: "Students aged 18-25 with outstanding academic performance.",
    },
    {
      question: "What documents are required?",
      answer: "Official transcripts, ID proof, and a recommendation letter.",
    },
    {
      question: "When is the application deadline?",
      answer: "Applications close on March 15th each year.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 bg-white px-6 md:px-72">
      <h1 className="font-bold text-3xl mb-6">MOST FREQUENTLY ASKED QUESTIONS</h1>
      <div className="flex flex-col w-full gap-6">
        {faqItems.map((faq, index) => (
          <div key={index} className="text-left w-full">
            <button
              onClick={() => toggleDropdown(index)}
              className={`w-full text-black focus:ring-0 border ${openDropdownIndex  === index ? "rounded-t rounded-b-none" : "rounded-lg"}  font-medium  text-sm px-5 py-2.5 text-left flex justify-between items-center`}
              type="button"
            >
              {faq.question}
              <span>{openDropdownIndex === index ? "-" : "+"}</span>
            </button>
            {openDropdownIndex === index && (
              <div className={`w-full bg-white divide-y border divide-gray-100 ${openDropdownIndex ===index ? "rounded-none border-t-0" : "rounded-lg "}  dark:bg-gray-700 dark:divide-gray-600  p-4`}>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
