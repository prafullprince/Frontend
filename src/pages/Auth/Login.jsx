import React, { useState } from 'react'
import { ACCOUNT_TYPE } from "../../utills/constants";
import signupImg from "../../assets/Images/signup.webp";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import HilightText from "../../components/core/Homepage/HilightText";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/connectionLogic';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  console.log(accountType);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(formData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  function handleOnSubmit(e){
    e.preventDefault();

    dispatch(login(accountType,formData.email,formData.password,navigate));

    setFormData({
      email:"",
      password:""
    })
  }

  return (
    <div className="flex lg:flex-row items-center w-11/12 mx-auto min-h-screen gap-[200px] max-w-7xl">
      {/* left Part */}
      <div className="flex flex-col p-2 text-richblack-100">
        {/* header */}
        <div className="flex flex-col gap-4 max-w-[380px]">
          <h2 className="font-semibold text-white text-2xl">Welcome Back</h2>
          <p className="font-light">
            Build skills for today,tomorrow,and beyond.
            <HilightText text={"Education to future-proof your career"} />
          </p>
        </div>
        {/* Instructor/Student Tab */}
        <div className="my-8 flex rounded-full bg-richblack-700 px-1 py-1 gap-1 w-fit">
          {
            tabData.map((tab)=>(
              <button onClick={()=>setAccountType(tab.type)} key={tab.id} className={`${accountType === tab.type ? " bg-richblack-900 text-white":""} rounded-full px-8 py-[6px]`}>
                {tab.tabName}
              </button>
            ))
          }
        </div>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-6">
          {/* email */}
          <div>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Email Address <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                placeholder="Enter email address"
                onChange={changeHandler}
                className="form-style w-full"
              />
            </label>
          </div>
          {/* password */}
          <div className="flex gap-6">
            <div className="relative">
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Create Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  name="password"
                  value={formData.password}
                  placeholder="Enter Password"
                  onChange={changeHandler}
                  className="form-style w-full"
                />
                <span
                  onClick={() => setShowPassword((old) => !old)}
                  className="absolute right-4 top-[40px] z-[10] cursor-pointer text-lg"
                >
                  {showPassword ? (
                    <AiOutlineEye className="text-white" />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </label>
            </div>
            <div className="relative">
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Enter Password"
                  onChange={changeHandler}
                  className="form-style w-full"
                />
                <span
                  onClick={() => setShowConfirmPassword((old) => !old)}
                  className="absolute right-4 top-[40px] z-[10] cursor-pointer text-lg"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye className="text-white" />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </label>
            </div>
          </div>
          {/* submit */}
          <button
            type="submit"
            className="flex justify-center items-center bg-yellow-200 text-black rounded-md font-semibold py-3 transition-all duration-200 hover:scale-95"
          >
            Sign in
          </button>
        </form>
      </div>
      {/* right part */}
      <div>
        <img src={signupImg} alt="signup" />
      </div>
    </div>
  )
}

export default Login
