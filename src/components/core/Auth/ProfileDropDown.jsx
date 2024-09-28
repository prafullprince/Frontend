import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../services/connectionLogic';
import ConfirmationModal from '../../common/ConfirmationModal';

const ProfileDropDown = () => {
  const { user } = useSelector((state)=>state.profile);
  const { image } = useSelector((state)=>state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmationModal,setConfirmationModal] = useState(null);

  return (
    <div className={`flex items-center gap-x-6 relative ${confirmationModal !== null ? "" : "" }`}>
      <Link to={"/dashboard/my-profile"}>
        <div className=' text-caribbeangreen-5 border-[2px] border-richblack-700 text-xl transition-all duration-200 hover:scale-95 rounded-2xl px-[20px] py-[6px] shadow-sm bg-richblack-800 shadow-blue-100'>
          Dashboard
        </div>
      </Link>
      <div onClick={()=>
          setConfirmationModal({
            text1:"Are you sure ?",
            text2:"You will be loggedOut",
            btn1Text:"Logout",
            btn2Text:"Cancel",
            btn1Handler: ()=> dispatch(logout(navigate)),
            btn2Handler: ()=> setConfirmationModal(null)
          })
      } className='relative flex items-center gap-x-1 cursor-pointer'>
        {/* user.image = not working  ||  user?.image = working */}
        <img src={image} alt={user?.firstName} className='w-[35px] rounded-full object-cover aspect-square'/>
      </div>

    
          {
            confirmationModal && <ConfirmationModal modalData={confirmationModal} />
          }
     
      
    </div>

  )
}

export default ProfileDropDown
