import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HilightText from "./HilightText";
import { IoMdPeople } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";

const tabsName = [
  'Free',
  'New to coding',
  'Most popular',
  'Skills paths',
  'Career paths',
];

const ExploreMore = () => {

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [course, setCourse] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    // change course ka value acc to input tabs value
    const result = HomePageExplore.filter((cours) => cours.tag === value);
    setCourse(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>

      <div className="text-center text-4xl font-semibold">
        Unlock the
        <HilightText text={"Power Of Code"} />
      </div>

      <p className="text-center text-richblack-300 text-md font-medium mt-2">
        Learn to build anything you can imagine
      </p>

      {/* tabs */}
      <div className="flex gap-2 items-center border rounded-full border-richblack-800 px-3 py-1 bg-richblack-800 mt-6 w-fit justify-center mx-auto">
        {tabsName.map((tab, index) => (
            <div
              onClick={() => setMyCards(tab)}
              key={index}
              className={`text-[16px] px-4 py-1 shadow-lg flex items-center rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 ${
                currentTab === tab
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              }`}
            >
              {tab}
            </div>
        ))}
      </div>

      {/* cards */}
      <div className="lg:h-[150px] max-w-maxContent">
        <div className="flex gap-8 items-center mt-16 w-full">
          {course.map((singleCourse, index) => (
            <div
              key={index}
              className={`flex w-[33%] flex-col gap-2 max-w-[250px] border-[0px] pl-4 pb-2 pr-4 shadow-2xl shadow-blue-50 ${
                currentCard === singleCourse.heading ? " bg-white" : "bg-[#161D29]"
              }`}
            >
              <h2 className={`${currentCard === singleCourse.heading ? "text-[#161D29]":"text-[#DBDDEA]"} mt-8 font-semibold`}>{singleCourse.heading}</h2>
              <p className={`${currentCard === singleCourse.heading ? "text-[#6E727F]":"text-[#585D69]"} mt-2`}>{singleCourse.description}</p>
              <div className={`${currentCard === singleCourse.heading ? "text-[#0A5A72] border-t-[#C5C7D4]":"text-[#838894]"} flex pt-2 pb-2 mt-4 justify-between border-dashed border-t`}>
                <div className="flex items-center gap-2">
                  <IoMdPeople />
                  {singleCourse.level}
                </div>
                <div className="flex items-center gap-2">
                  <FaCodeBranch />
                  {singleCourse.lessionNumber}
                  <p>Lessons</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ExploreMore;
