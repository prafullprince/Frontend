import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HilightText from "./HilightText";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const ExpertSession = () => {
  return (
    // content window
    <div className="w-11/12 mx-auto max-w-6xl mt-20">
      {/* content box */}
      <div className="flex flex-row items-center justify-between gap-20">
        {/* left part */}
        <div className="relative shadow-blue-200 shadow-lg">
          <img src={instructor} alt={"timeline"} />
        </div>
        {/* right part */}
        <div className="flex flex-col gap-8">
          <div className="text-white text-4xl">
            Become an
            <HilightText text={"Instructor"} />
          </div>
          <p className="font-inter font-semibold text-richblack-400">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <Button active={true} linkto={"/signup"}>
              Start Teaching Today
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSession;
