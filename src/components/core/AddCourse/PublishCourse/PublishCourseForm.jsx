import React from 'react'
import { useDispatch } from 'react-redux'
import { resetCourseState } from '../../../../slices/courseSlice';

const PublishCourseForm = () => {

  const dispatch = useDispatch();

  function btnHandler(){
    dispatch(resetCourseState());
  }


  return (
    <div className='flex justify-center items-center'>
      <button className='px-4 py-2 bg-yellow-200 text-black rounded-lg' onClick={btnHandler}>Publish Course</button>
    </div>
  )
}

export default PublishCourseForm
