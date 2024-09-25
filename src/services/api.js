// base url
const BASE_URL = "http://localhost:4000/api/v1"


                                        // endpoints
// categories
export const categories = {
    SHOW_ALL_CATEGORIES : BASE_URL + "/course/getAllCategory",
    GET_SINGLE_CATOGORIES : BASE_URL + "/course/getSingleCategory"
}

// AUTH ENDPOINTS
export const authentication = {
    SENDOTP_API: BASE_URL + "/auth/sendOtp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

