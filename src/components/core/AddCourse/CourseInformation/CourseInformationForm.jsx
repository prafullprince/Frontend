import React, { useEffect, useRef, useState } from "react";
import {  } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../../../../services/apiConnector";
import { categories } from "../../../../services/api";
import toast from "react-hot-toast";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import previewImage from "../../../../assets/Images/frame.png";
// import { setStep } from "../../../../slices/courseSlice";
import { addCourseApi } from "../../../../services/courseApiCall";

const CourseInformationForm = () => {
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tag: "",
    instructions: "",
    whatYouWillLearn: "",
    category: "",
  });

  function formChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // call from slice
  const { token } = useSelector((state)=>state.auth);

  // thumbnail
  function changeImage() {
    imgRef.current.click();
  }
  const [thumbnail, setThumbnail] = useState("");
  function thumbnailChange(e) {
    const file = e.target.files[0];
    setThumbnail(file);
  }


  // categoriesData
  const [categoriesData, setCategoriesData] = useState([]);

  // fetchCategory
  useEffect(() => {
    const getCategories = async () => {
      const tid = toast.loading("Loading...");
      const res = await apiConnector("GET", categories.SHOW_ALL_CATEGORIES);
      let result = res?.data?.response;
      if (result.length > 0) {
        setCategoriesData(result);
      }
      toast.dismiss(tid);
    };

    getCategories();
  }, []);


  // onSubmit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // api call
    const rr = await addCourseApi(formData.name,formData.description,formData.whatYouWillLearn,formData.price,formData.tag,formData.instructions,formData.category,thumbnail,token,dispatch);
    console.log("result: ",rr);

    setFormData({
      courseTitle: "",
      courseDesc: "",
      coursePrice: "",
      courseTags: "",
      courseRequirements: "",
      courseBenefits: "",
      courseCategory: "",
    });
  };

  return (
    <div className="text-white">
      <form
        onSubmit={handleSubmit}
        className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8"
      >
        {/* title */}
        <div>
          <label htmlFor="courseTitle">
            Title<sup>*</sup>
          </label>
          <input
            id="courseTitle"
            placeholder="Enter Course Title"
            onChange={formChangeHandler}
            name="name"
            value={formData.name}
            className="w-full form-style mt-1"
          />
        </div>
        {/* desc */}
        <div>
          <label htmlFor="courseDesc">
            Short Description<sup>*</sup>
          </label>
          <textarea
            required
            id="courseDesc"
            placeholder="Enter Course Description"
            onChange={formChangeHandler}
            name="description"
            value={formData.description}
            className="w-full form-style mt-1 min-h-[100px]"
          />
        </div>
        {/* price */}
        <div className="relative">
          <label htmlFor="coursePrice">
            Price<sup>*</sup>
          </label>
          <input
            required
            type="Number"
            id="coursePrice"
            placeholder="Enter course price"
            name="price"
            value={formData.price}
            onChange={formChangeHandler}
            className="w-full form-style mt-1 pl-10"
          />
          <HiOutlineCurrencyRupee className="absolute top-1/2 translate-x-[40%] translate-y-[10%] text-2xl text-richblack-400" />
        </div>
        {/* category dropdown */}
        <div>
          <label htmlFor="courseCategory">
            Category<sup>*</sup>
          </label>
          <select
            className="w-full form-style mt-1"
            id="courseCategory"
            defaultValue={""}
            name="category"
            value={formData.category}
            onChange={formChangeHandler}
          >
            <option disabled value={""}>
              Choose a category
            </option>
            {categoriesData.length > 0 ? (
              categoriesData.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))
            ) : (
              <option>Category Not Found</option>
            )}
          </select>
        </div>
        {/* tags */}
        <div>
          <label htmlFor="courseTags">
            Tags<sup>*</sup>
          </label>
          <input
            className="w-full form-style mt-1"
            required
            id="courseTags"
            placeholder="Enter course tags"
            name="tag"
            value={formData.tag}
            onChange={formChangeHandler}
          />
        </div>
        {/* thumbnail upload */}
        <div onClick={changeImage}>
          <label className="mb-2" htmlFor="courseImage">
            Thumbnail<sup>*</sup>
          </label>
          {thumbnail ? (
            <img src={URL.createObjectURL(thumbnail)} alt="thumbnail" />
          ) : (
            <img src={previewImage} alt="thumbnail" />
          )}
          <input
            type="file"
            id="courseImage"
            ref={imgRef}
            onChange={thumbnailChange}
            style={{ display: "none" }}
            className="w-full form-style mt-4"
          />
        </div>
        {/* instructions/requirement */}
        <div>
          <label htmlFor="courseRequirements">
            Instructions<sup>*</sup>
          </label>
          <input
            className="w-full form-style mt-1"
            required
            id="courseRequirements"
            placeholder="Enter course requirements"
            name="instructions"
            value={formData.instructions}
            onChange={formChangeHandler}
          />
        </div>
        {/* Benefits */}
        <div>
          <label htmlFor="courseBenefits">
            Benefits<sup>*</sup>
          </label>
          <textarea
            id="courseBenefits"
            placeholder="Enter Course Benefits"
            name="whatYouWillLearn"
            value={formData.whatYouWillLearn}
            onChange={formChangeHandler}
            className="w-full form-style mt-1 min-h-[100px]"
          />
        </div>
        {/* buttons */}
        <div className="flex justify-end gap-x-2">
          <button
            type="submit"
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-yellow-50 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseInformationForm;
