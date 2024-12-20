import React from "react";

const steps = [
  { id: 1, title: "Submit Application", duration: "2-3 weeks" },
  { id: 2, title: "Document Review", duration: "3-4 weeks" },
  { id: 3, title: "Interview", duration: "1-2 weeks" },
  { id: 4, title: "Final Decision", duration: "2 weeks" }
];

const ApplicationProcess = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 w-full ">
    
     

      
      {steps.map((step) => (
        <div key={step.id} className=" text-center flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white font-bold rounded-full ">
            {step.id}
          </div>
          {/* <div className="absolute inset-x-0 top-6 h-0.5 bg-gray-300"></div> */}
          <h3 className="mt-4 font-semibold text-gray-700">{step.title}</h3>
          <p className="text-sm text-gray-500">{step.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicationProcess;
