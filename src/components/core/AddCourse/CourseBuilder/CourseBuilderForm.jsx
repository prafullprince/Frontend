import React, { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import NestedView from './NestedView';
import { setCourse, setEditCourse, setStep } from '../../../../slices/courseSlice';
import { createSection } from '../../../../services/courseApiCall';

const CourseBuilderForm = () => {

  // hook
  const dispatch = useDispatch();

  // store
  const { course } = useSelector((state)=>state.course);
  const { token } = useSelector((state)=>state.auth);


  // state render changes
  const [name,setName] = useState("");
  const [editSectionName,setEditSectionName] = useState(false);


  // handler functions
  function cancelEditHandler(){
    setEditSectionName(false);
    setName("");
  }
  function goBack(){
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  }
  function goNext(){
    dispatch(setStep(3));
  }


  // submitHandler
  async function handleSubmit(e){
    e.preventDefault();

    if(editSectionName){

    }
    else{
      let result = await createSection(name,course._id,token,dispatch);
      console.log("updatedCourse",result);
      setName("");
    }

  }

  return (
    <div className='text-white flex flex-col gap-2 bg-richblack-800 p-6 rounded-lg'>
      <p className='font-semibold text-2xl text-richblack-25'>Course Builder</p>
      <form onSubmit={handleSubmit} className='mt-4'>
        {/* createSection */}
        <div className='flex flex-col'>
          <label className='text-richblack-50' htmlFor='sectionName'>Section Name<sup>*</sup></label>
          <input 
            required
            id='sctionName'
            name='name'
            onChange={(e)=>setName(e.target.value)}
            value={name}
            className='form-style mt-2'
            placeholder='Add section to build your course'
          />
        </div>
        {/* Create Section / Edit Section button */}
        <div className='mt-4'>
          {
            editSectionName ? (
              <div className='flex gap-4'>
                <button className='flex gap-2 items-center px-4 outline text-lg rounded-lg py-1 bg-richblack-900 text-yellow-25 font-light'>
                  <p>Edit Section Name</p>
                  <MdEdit />
                </button>
                <button onClick={cancelEditHandler} className='underline text-richblack-200'>Cancel Edit</button>
              </div>
            ) : (<button type='submit' className='flex outline gap-2 items-center px-4 text-lg rounded-lg py-1 bg-richblack-900 text-yellow-25'>
              <p>Create Section</p>
              <IoAddCircleOutline />
            </button>)
          }
        </div>

      </form>

      {/* Nested View */}
      {
        course.courseContent.length > 0 && (
          <NestedView />
        )
      }

      {/* buttons */}
      <div className='flex justify-end gap-4 items-center' >
        <button className='px-4 py-2 bg-richblack-900 text-lg font-normal text-richblack-100 rounded-lg' onClick={goBack}>Back</button>
        <button className='px-4 font-semibold py-2 bg-yellow-25 text-black rounded-lg' onClick={goNext}>Next</button>
      </div>

    </div>
  )
}

export default CourseBuilderForm
