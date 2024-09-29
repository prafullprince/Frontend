import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import previewImage from "../../../assets/Images/frame.png";
import { apiConnector } from "../../../services/apiConnector";
import { createSubSection } from "../../../services/courseApiCall";
import { setCourse } from "../../../slices/courseSlice";

const SubSectionModal = ({ modalData, setModalData }) => {
  const imgRef = useRef(null);

  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);


  // formdata
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  function formChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // thumbnail
  function changeImage() {
    imgRef.current.click();
  }
  const [video, setVideo] = useState(null);
  function thumbnailChange(e) {
    const file = e.target.files[0];
    setVideo(file);
  }

  // submitHandler
  async function submitHandler(e){
    e.preventDefault();
    const res = await createSubSection(formData.title,formData.description,modalData.sectionId,video,modalData.courseId,token,dispatch);
    console.log("updatedSubSectionCourse",res);

    setModalData(null);
  }

  return (
    <div className="fixed inset-0 bg-opacity-30 z-50 backdrop-blur-sm flex justify-center items-center">
      <form onSubmit={submitHandler} className="rounded-lg bg-richblack-800 p-6 gap-6">
        <p className="mt-2">Add SubSection</p>

        <div className="flex flex-col gap-2 mt-4">
          {/* title */}
          <div>
            <label htmlFor="subSectionTitle">
              Title<sup>*</sup>
            </label>
            <input
              id="subSectionTitle"
              placeholder="Enter SubSection Title"
              onChange={formChangeHandler}
              name="title"
              value={formData.title}
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
              placeholder="Enter SubSection Description"
              onChange={formChangeHandler}
              name="description"
              value={formData.description}
              className="w-full form-style mt-1 min-h-[100px]"
            />
          </div>
          {/* thumbnail upload */}
          <div className="" onClick={changeImage}>
            <label className="mb-2" htmlFor="courseImage">
              Video<sup>*</sup>
            </label>
            {video ? (
              <video src={URL.createObjectURL(video)} />
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
          {/* buttons */}
          <div className="flex justify-end gap-4 items-center mt-4">
            <button
              type="submit"
              className="px-2 py-1 bg-yellow-25 text-richblack-900 rounded-lg outline"
            >
              Upload
            </button>
            <button
              onClick={() => setModalData(null)}
              className="text-richblack-50 bg-black rounded-lg outline px-2 py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubSectionModal;
