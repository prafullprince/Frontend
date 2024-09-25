import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item) => (
          <>
            <div key={item.id} className="flex flex-col items-center">
              <div
                className={` grid cursor-default aspect-square w-9 place-items-center border rounded-full ${
                  step === item.id
                    ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } ${step > item.id && "text-yellow-50 bg-yellow-50"}`}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
            </div>

            {item.id !== steps.length && (
              <>
                <div
                  className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                  step > item.id  ? "border-yellow-50" : "border-richblack-500"
                } `}
                ></div>
              </>
            )}
          </>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[130px] flex-col items-center gap-y-2"
              key={item.id}
            >
              
              <p
                className={`text-sm ${
                  step >= item.id ? "text-richblack-5" : "text-richblack-500"
                }`}
              >
                {item.title}
              </p>
            </div>
            
          </>
        ))}
      </div>

      {/* render components */}
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseInformationForm />}
      {step === 3 && <CourseInformationForm />}
    </>
  );
};

export default RenderSteps;
