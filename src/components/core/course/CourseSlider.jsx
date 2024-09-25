import React from "react";
import { PiCurrencyInr } from "react-icons/pi";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CourseSlider = ({ courseData }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:2,
    autoplay:false
  }

  return (
    <div className="mt-6">
      <div>
        <Slider {...settings}>
          {courseData?.map((course, index) => (
            <div className="flex flex-col gap-1" key={index}>
              {/* img */}
              <div className="border-[1px] rounded-lg max-w-[380px] shadow-lg">
                <img
                  src={course.thumbnail}
                  alt="course"
                  className="border-0 rounded-lg h-[230px] w-[350px]"
                />
              </div>
              {/* desc */}
              <div className="text-[#F1F2FF] text-[18px] font-medium mt-4 max-w-[380px]">
                {course.whatYouWillLearn}
              </div>
              {/* name */}
              <div className="text-[#838894] text-[16px]">{course.name}</div>
              {/* Price */}
              <div className="font-semibold text-[20px] text-[#df8525] flex items-center">
                <PiCurrencyInr className="font-bold" />
                {course.price}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseSlider;
