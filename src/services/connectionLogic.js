import toast from "react-hot-toast";
import { authentication } from "./api";
import { apiConnector } from './apiConnector';
import { setToken } from '../slices/authSlice';

// const { SENDOTP_API,SIGNUP_API,LOGIN_API } = authentication;


// sendOtp api call function
export function sendOtp(email,navigate){
    return async (dispatch)=>{
        const tid = toast.loading("...Loading");
        try{
            const result = await apiConnector("POST",authentication.SENDOTP_API,{email});
            console.log("otp api result is: ",result);

            if(!result.data.success){
                toast.error(result.data.message);
            }

            toast.success(result.data.message);
            navigate("/verify-email");
        }
        catch(error){
            console.log(error);
            toast.error("Couldn't sent otp");
        }
        toast.dismiss(tid);
    }
}


// signup api call function
export function signup(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate){
    return async(dispatch)=>{
        const tid = toast.loading("...Loading");
        try{
            const result = await apiConnector("POST",authentication.SIGNUP_API,{accountType,firstName,lastName,email,password,confirmPassword,otp});
            console.log("signup api result",result);

            if(!result.data.success){
                toast.error(result.data.message);
            }

            toast.success(result.data.message);
            navigate("/login");

        }
        catch(error){
            console.log(error);
        }
        toast.dismiss(tid);
    }
}


// login api call function
export function login(accountType,email,password,navigate){
    return async(dispatch)=>{
        const tid = toast.loading("...Loading");
        try{
            // api call
            const result = await apiConnector("POST",authentication.LOGIN_API,{accountType,email,password});
            console.log("result of login api call: ",result);

            if(!result.data.success){
                toast.error(result.data.message);
            }

            toast.success(result.data.message);
            dispatch(setToken(result.data.token));
            localStorage.setItem("token",JSON.stringify(result.data.token));
            navigate("/dashboard/my-profile");
            
        }
        catch(error){
            console.log(error);
        }
        toast.dismiss(tid);
    }
}


// changePassword


// resetPassword


