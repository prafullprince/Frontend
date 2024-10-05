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

export const coursess = {
    COURSE_PAGE_DETAILS: BASE_URL + "/course/GetSingleCourseDetails",
    CREATE_COURSE: BASE_URL + "/course/createCourse",
    CREATE_SECTION: BASE_URL + "/course/createSection",
    UPDATE_SECTION: BASE_URL + "/course/updateSection",
    CREATE_SUB_SECTION: BASE_URL + "/course/createSubSection",
    DELETE_SUB_SECTION: BASE_URL + "/course/deleteSubSection",
    CATURE_PAYMENT: BASE_URL + "/course/capturePayment",
    VERIFY_PAYMENT: BASE_URL + "/course/verifyPayment",
    EMAIL_RESPONSE: BASE_URL + "/course/sendPaymentSuccessEmail"
}
