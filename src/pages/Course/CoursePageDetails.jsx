import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coursePageDetail } from '../../services/courseApiCall';

const CoursePageDetails = () => {

  const { courseId } = useParams();

  const [courseDetails,setCourseDetails] = useState({});
  // const [courseContent,setCourseContent] = useState([]);

  
  useEffect(()=>{
    const courseDetailss = async ()=>{
      const res = await coursePageDetail(courseId);
      setCourseDetails(res?.response);
      // setCourseContent(res?.response?.courseContent);
      console.log("resres",res?.response);
    }
    courseDetailss();
  },[courseId]);

  console.log("courseDetails",courseDetails);

  return (
    <div className="text-white">
      {/* <div>{courseDetails.message}</div>
      <div>{courseDetails.description}</div>
      <div>{courseDetails.category.description}</div>
      <div className='flex gap-6'>
        {
          courseContent.map((section,index)=>(
            <div key={index}>
              <p>{section.name}</p>
            </div>
          ))
        }
      </div> */}
      HII
    </div>
  )
}

export default CoursePageDetails
