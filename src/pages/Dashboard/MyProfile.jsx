import React from 'react'
import { useSelector } from 'react-redux'
import { RiFileEditLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {

  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.profile);
  const {image} = useSelector((state)=>state.profile);

  return (
    <div className='flex flex-col gap-20'>
    {/* heading */}
      <h1 className="mb-6 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>

      {/* section 1 */}
      <div className='px-10 py-8 flex justify-between bg-richblack-800 items-center form-style'>
        {/* email,image,name */}
        <div className='flex gap-x-3 items-center'>
          <div className='shadow-lg w-20'>
            <img src={image} alt='ProfilePic' className='aspect-square border-r-0 rounded-full' />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <p className='text-white'>{user?.firstName} {" "} {user?.lastName}</p>
            <p className='text-richblack-400'>{user.email}</p>
          </div>
        </div>
        {/* edit1 */}
        <button onClick={()=> { navigate("/dashboard/setting") }} className='flex gap-1 justify-center items-center bg-yellow-300 text-black py-[6px] px-3 border-r-0 rounded-md font-semibold'>
          <div>Edit</div>
          <RiFileEditLine />
        </button>
      </div>

      {/* section 2 */}
      <div className='px-10 py-8 flex justify-between bg-richblack-800 items-center form-style'>
        {/* personal details */}
        <div className='flex flex-col gap-3 w-[40%]'>
          <div className=''>
            <p>Personal Details</p>
          </div>
          <div className='flex flex-col gap-[2px] mt-4'>
            {/* p1 */}
            <div className='flex justify-between gap-y-4'>
              <div className='flex flex-col'>
                <p className='text-richblack-700 text-base'>First Name</p>
                <p className='text-sm'>{user?.firstName}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-richblack-700'>Last Name</p>
                <p className='text-sm'>{user?.lastName}</p>
              </div>
            </div>
            {/* p2 */}
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <p className='text-richblack-700'>Email</p>
                <p className='text-sm'>{user?.email}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-richblack-700 flex justify-end'>Phone Number</p>
                <p>6201662241</p>
              </div>
            </div>
            {/* p3 */}
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <p className='text-richblack-700'>Gender</p>
                <p>Male</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-richblack-700 flex items-end'>DOB</p>
                <p>06/04/2003</p>
              </div>
            </div>
          </div>
        </div>
        {/* edit1 */}
        <button onClick={()=> { navigate("/dashboard/setting") }} className='flex gap-1 justify-center items-center bg-yellow-300 text-black py-[6px] px-3 border-r-0 rounded-md font-semibold'>
          <div>Edit</div>
          <RiFileEditLine />
        </button>
      </div>
    </div>
  )
}

export default MyProfile
