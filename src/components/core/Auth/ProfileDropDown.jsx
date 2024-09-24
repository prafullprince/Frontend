import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProfileDropDown = () => {
  const { user } = useSelector((state)=>state.profile);
  const { image } = useSelector((state)=>state.profile);

  return (
    <div className='flex items-center gap-x-4'>
      <Link to={"/dashboard/my-profile"}>
        <div className='text-richblack-100 border-[0px] text-lg transition-all duration-200 hover:scale-95 rounded-full px-4 py-[6px] shadow-md bg-richblack-800 shadow-blue-500 bg-gradient-to-b from-[#62ea80] via-[#ee7744] to-[#38d77b] text-transparent bg-clip-text'>
          Dashboard
        </div>
      </Link>
      <Link to={"/dashboard"} className='flex items-center gap-x-1'>
        {/* user.image = not working  ||  user?.image = working */}
        <img src={image} alt={user?.firstName} className='w-[35px] rounded-full object-cover aspect-square'/>
      </Link>
    </div>
  )
}

export default ProfileDropDown
