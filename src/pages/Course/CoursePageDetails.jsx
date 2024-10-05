import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCourse } from '../../services/paymentsApiCall';
import { useNavigate, useParams } from 'react-router-dom';


const CoursePageDetails = () => {

  const { token } = useSelector((state)=>state.auth);
  const { user } = useSelector((state)=>state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  function handleBuyCourse(){
    if(token){
      buyCourse(courseId,token,user,navigate,dispatch);
    }
  }


  return (
    <div className="text-white flex justify-center items-center mt-52 gap-8 flex-col">
      <p className="text-xl font-semibold">Hii puchase needed course</p>
      <div>
        <button className="flex px-4 py-2 font-semibold text-lg bg-yellow-50 rounded-lg text-black" onClick={()=>handleBuyCourse()}>Buy Now</button>
      </div>
    </div>
  )
}

export default CoursePageDetails
