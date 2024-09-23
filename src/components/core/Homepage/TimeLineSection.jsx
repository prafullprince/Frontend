import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineimage from "../../../assets/Images/TimelineImage.png";


const TimeLineSection = () => {
  const timeline = [
    {
      Logo: Logo1,
      heading: "Leadership",
      description: "Fully commited to the success of company",
    },
    {
      Logo: Logo2,
      heading: "Responsibility",
      description: "Students will be always our top priority",
    },
    {
      Logo: Logo3,
      heading: "Flexibility",
      description: "Ability of switch is an important skills",
    },
    {
      Logo: Logo4,
      heading: "Solve the Problem",
      description: "Code your way to a solution",
    },
  ];

  return (
    // content window
    <div className="w-11/12 mx-auto max-w-6xl mt-20">
    {/* content box */}
      <div className="flex flex-row gap-15 items-center">
      {/* left part */}
        <div className="w-[40%] flex flex-col justify-center gap-4">
          {timeline.map((element, index) => (
            <div>
              <div className="flex gap-4" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow-lg shadow-blue-100">
                  <img src={element.Logo} alt={"Logo"} />
                </div>
                <div className="">
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.description}</p>
                </div>
              </div>
              <div className="h-[50px] border-l-[1px] border-dashed ml-6 mt-4"></div>
            </div>
          ))}
        </div>
        {/* right part */}
        <div className="relative shadow-blue-200">
          <img src={timelineimage} alt={"timeline"} />
          {/* overlap containers */}
          <div className="absolute bg-caribbeangreen-700 flex text-white uppercase py-6 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/* left part */}
            <div className="flex gap-5 items-center border-r border-caribbeangreen-200 px-7">
                <p className="text-3xl font-bold">10</p>
                <p className=" text-caribbeangreen-300 text-sm">Years of Experience</p>
            </div>
            {/* right part */}
            <div className="flex gap-5 items-center px-7">
                <p className="text-3xl font-bold">250</p>
                <p className=" text-caribbeangreen-300 text-sm">Type of Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
