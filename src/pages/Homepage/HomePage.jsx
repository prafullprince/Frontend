import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import HilightText from "../../components/core/Homepage/HilightText";
import Button from "../../components/core/Homepage/Button";
import Banner from "../../assets/Images/banner.mp4";
import Codeblock from "../../components/core/Homepage/Codeblock";
import TimeLineSection from "../../components/core/Homepage/TimeLineSection";
import LearningLanguageSection from "../../components/core/Homepage/LearningLanguageSection";
import ExpertSession from "../../components/core/Homepage/ExpertSession";
import ExploreMore from "../../components/core/Homepage/ExploreMore";

const HomePage = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative w-11/12 mx-auto flex flex-col items-center justify-between text-white max-w-6xl">
        {/* button */}
        <Link to={"/signup"}>
          <div className="mt-16 p-1 rounded-full bg-richblack-800 text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center px-10 py-1 hover:bg-richblack-900 rounded-full gap-2 font-bold">
              <p>Become an Instructor</p>
              <FaArrowRightLong />
            </div>
          </div>
        </Link>

        {/* Heading and description */}
        <div className="text-center text-4xl font-semibold mt-6">
          Empower Your Future With
          <HilightText text={"Coding School"} />
        </div>
        <div className=" text-richblack-300 text-lg text-center mt-4 mx-auto">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* buttons */}
        <div className="flex gap-6 mt-8">
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>
          <Button active={false} linkto={"/login"}>
            Book Demo
          </Button>
        </div>

        {/* Video Files */}
        <div className="shadow-blue-200 mt-12">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Space */}
        {/* section1 */}
        <div className="flex gap-6 items-center">
          <Codeblock
            position={"lg:flex-row"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock Your
                <HilightText text={"Coding Potential"} />
                With Our Online Courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            btn1={{
              btnText: "Try it YourSelf",
              linkto: "/signup",
              active: true,
            }}
            btn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
          />
          <Codeblock
            position={"lg:flex"}
            heading={
              <div className=" text-4xl font-semibold">
                Start
                <HilightText text={"Coding in Seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            btn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            btn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
          />
        </div>
        {/* tabs */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className=" bg-pure-greys-5 pb-12 text-richblack-700">
        {/* part 1 */}
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-6xl flex items-center gap-5 mx-auto justify-center">
            <div className="flex gap-7 text-white mt-[180px]">
              <Button active={true} linkto={"signup"}>
                Explore Full Catalog
                <FaArrowRightLong />
              </Button>
              <Button active={false} linkto={"login"}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* part 2 */}
        <div className="w-11/12 max-w-6xl flex flex-col items-center gap-7 mx-auto justify-center my-4">
          <div className="flex flex-row gap-5">
            <div className="text-4xl font-semibold">
              Get the Skills you need for a
              <HilightText text={"Job that is in demand"} />
            </div>
            <div>
              <p className="font-semibold">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <div className="w-fit mt-8">
                <Button active={true} linkto={"/signup"}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* part 3 */}
        <TimeLineSection />

        {/* part 4 */}
        <LearningLanguageSection />
      </div>

      {/* Section 3 */}
      <div className="bg-richblack-900 pb-12">
        <ExpertSession />
      </div>
      {/* Footer */}
    </div>
  );
};

export default HomePage;
