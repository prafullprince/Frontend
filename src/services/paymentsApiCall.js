import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { coursess } from "./api";
import rzpLogo from "../assets/Logo/Logo-Full-Light.png";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
}

// buy course
export async function buyCourse(
  courseId,
  token,
  userDetails,
  navigate,
  dispatch
) {
  const tid = toast.loading("Loading...");
  try {
    // load scripts
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.error("error on loading");
    }

    // creating razorpay order
    const orderResponse = await apiConnector(
      "POST",
      coursess.CATURE_PAYMENT,
      { courseId },
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("orderResponse: ",orderResponse);

    if (!orderResponse.data.success) {
      throw new Error("error order");
    }

    // opening the razorpay SDK
    const options = {
      key: "rzp_test_sK1gtaCq17ERAl",
      currency: orderResponse.data.currency,
      amount: orderResponse.data.amount,
      order_id: orderResponse.data.id,
      name: "StudyNotion",
      description: "Thank you for purchasing",
      image: rzpLogo,
      prefill: {
        name: `${userDetails.firstName} ${userDetails.lastName}`,
        email: `${userDetails.email}`,
      },
      handler: function(response) {
        console.log("responseHandler: ",response);
        console.log("responseHandler2: ",response.razorpay_signature);

        // send successfullyMail
        // sendPaymentSuccessEmail(response, orderResponse.data.amount, token);
        // verifyPayment
        verifyPayment(courseId,response.razorpay_payment_id,response.razorpay_order_id,response.razorpay_signature, token, navigate, dispatch);
      },
    };

    // open dialog box of razorpay SDK
    const paymentObject = new window.Razorpay(options);
    paymentObject.open()
    paymentObject.on("payment.failed", function (response) {
      toast.error("Oops! Payment Failed.")
      console.log(response.error)
    })

  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
  toast.dismiss(tid);
}

async function verifyPayment(courseId,razorpay_payment_id,razorpay_order_id,razorpay_signature, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...");
  // dispatch(setPaymentLoading(true))
  try {
    const response = await apiConnector(
      "POST",
      coursess.VERIFY_PAYMENT,
      {courseId,razorpay_payment_id,razorpay_order_id,razorpay_signature},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Payment Successful. You are Added to the course ");
    navigate("/dashboard/enrolled-courses");
    //   dispatch(resetCart())
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error);
    toast.error("Could Not Verify Payment.");
  }
  toast.dismiss(toastId);
}

async function sendPaymentSuccessEmail(response, amount, token) {
  try {
    await apiConnector(
      "POST",
      coursess.EMAIL_RESPONSE,
      {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  } catch (error) {
    console.log("PAYMENT SUCCESS EMAIL ERROR............", error);
  }
}
