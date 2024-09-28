import React, { useEffect, useState } from "react";
import CourseSlider from "../components/core/course/CourseSlider";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { categories } from "../services/api";
import { categoryCourses } from "../services/courseApiCall";

const Catalog = () => {

    // fetch catalogName from parametes
    const { catalogName } = useParams();

    // set courses of this catalog
    const [catalogCourseData,setCatalogCourseData] = useState([]);

    // get categoryId that came from cateogy click
    const [categoryId,setCategoryId] = useState("");

    // fetch all category when catalogName changed in parameters and return catalogName wala category
    useEffect(()=>{
        const fetchCategory = async ()=>{
            const res = await apiConnector("GET",categories.SHOW_ALL_CATEGORIES);
            const category_id = res?.data?.response.filter((cat)=>cat.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
            console.log("cat id",category_id);
        }
        fetchCategory();
    },[catalogName]);

    // fetch allDetails of that SinglecategoryPage api
    useEffect(()=>{
        const getCategoryDetails = async ()=>{
            try{
                const res = await categoryCourses(categoryId);
                setCatalogCourseData(res);
                console.log("categoryCourse res: ",res);
                console.log(catalogCourseData);
            }
            catch(error){
                console.log(error);
            }
        }
        getCategoryDetails();
    },[categoryId]);


  return (
    <div>
    {/* introduction */}
      <div className="flex items-center bg-richblack-800">
        <div className="w-11/12 mx-auto max-w-maxContent text-white py-12 flex flex-col gap-4">
            {/* 1st para */}
            <div className="flex gap-x-2 text-[#838894] font-medium">
                <div>Home</div>
                <div>/</div>
                <div>Catalog</div>
                <div>/</div>
                <div className="text-[#FFD60A] font-bold">{catalogCourseData?.selectedCategory?.name}</div>
            </div>
            {/* 2nd para */}
            <p className="text-3xl text-[#F1F2FF]">{catalogCourseData?.selectedCategory?.name}</p>
            <p className="text-[#999DAA] text-[16px] max-w-4xl font-normal">{catalogCourseData?.selectedCategory?.description}</p>
        </div>
      </div>
      {/* courses */}
      <div className="mt-12">
        {/* section 1 */}
        <div className="flex flex-col w-[66%] mx-auto">
          <h2 className="text-[30px] text-[#F1F2FF] font-semibold">Courses to get you started</h2>
          <div className="flex gap-x-3">
            <p>Most Popular</p>
            <p>New</p>
          </div>
          {
   
            <CourseSlider courseData={catalogCourseData?.allCourses} />
                                
          }
        </div>
        {/* section 2 */}
        <div>
            <p>Top Courses</p>
            <div>
                <CourseSlider />
            </div>
        </div>
        {/* section 3 */}
        <div>
            <p>Frequently Bought Together</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
