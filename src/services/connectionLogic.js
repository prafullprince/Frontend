import toast from "react-hot-toast";
import { authentication } from "./api";
import { apiConnector } from "./apiConnector";
import { setToken } from "../slices/authSlice";
import { setUser } from '../slices/profileSlice';
import { setImage } from '../slices/profileSlice';

// const { SENDOTP_API,SIGNUP_API,LOGIN_API } = authentication;

// sendOtp api call function
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const tid = toast.loading("...Loading");
    try {
      const result = await apiConnector("POST", authentication.SENDOTP_API, {
        email,
      });
      console.log("otp api result is: ", result);

      if (!result.data.success) {
        toast.error(result.data.message);
      }

      toast.success(result.data.message);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't sent otp");
    }
    toast.dismiss(tid);
  };
}

// signup api call function
export function signup(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const tid = toast.loading("...Loading");
    try {
      const result = await apiConnector("POST", authentication.SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });
      console.log("signup api result", result);

      if (!result.data.success) {
        toast.error(result.data.message);
      }

      toast.success(result.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(tid);
  };
}

// login api call function
export function login(accountType, email, password, navigate) {
  return async (dispatch) => {
    const tid = toast.loading("...Loading");
    try {
      // api call
      const result = await apiConnector("POST", authentication.LOGIN_API, {
        accountType,
        email,
        password,
      });

      // validation
      if (!result.data.success) {
        toast.error(result?.data?.message);
      }
      toast.success(result?.data?.message);

      // setToken in store and localstorage
      dispatch(setToken(result.data.token));
      localStorage.setItem("token", JSON.stringify(result?.data?.token));

      // finding userDetails
      const user = result?.data?.user;
      const userImage = user?.image
        ? user?.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${user?.firstName} ${user?.lastName}`;
        // -> set userData in store
      dispatch(setUser({...result?.data?.user}));
      dispatch(setImage(userImage));
      // -> set userDetails in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("image",JSON.stringify(userImage));
      

      // navigate
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(tid);
  };
}

// changePassword

// resetPassword

// logout function
export function logout(navigate){
  return (dispatch)=>{
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out Successfully");
    navigate("/login");
  }
}
