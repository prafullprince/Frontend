import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CountrCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  // extract function that present in react-form-hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  //   handle submit function
  async function submitContactForm(data) {
    console.log("form data is: ", data);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phonenumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      <form
        className="flex flex-col gap-7"
        onSubmit={handleSubmit(submitContactForm)}
      >
        {/* name */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* firstName */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label className="lable-style" htmlFor="firstName">
              firstName
            </label>
            <input
              className="form-style"
              type="text"
              placeholder="Enter first name"
              id="firstName"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please Enter Your First Name
              </span>
            )}
          </div>
          {/* lastName */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label className="lable-style" htmlFor="lastName">
              lastName
            </label>
            <input
              className="form-style"
              type="text"
              placeholder="Enter last name"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please Enter Your last Name
              </span>
            )}
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="form-style"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your Email address.
            </span>
          )}
        </div>
        {/* phone number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="label-style">
            Phone Number
          </label>
          <div className="flex gap-5">
            {/* dropdown */}
            <div className="flex w-[81px] flex-col gap-2">
              <select
                className="form-style"
                name="dropdown"
                id="dropdown"
                {...register("countrycode", { required: true })}
              >
                {CountrCode.map((Country, index) => (
                  <option key={index} value={Country.code}>
                    {Country.code} - {Country.country}
                  </option>
                ))}
              </select>
            </div>
            {/* phoneNumber */}
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                className="form-style"
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="6201662241"
                {...register("phonenumber", {
                  required: {
                    value: true,
                    message: "Please enter your phonenumber",
                  },
                  maxLength: { value: 12, message: "12 length required max" },
                  minLength: {
                    value: 10,
                    message: "10 length required minimum",
                  },
                })}
              />
              {errors.phoneNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="lable-style">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            className="form-style"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your Message.
            </span>
          )}
        </div>
        {/* button */}
        <button
          type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] disabled:bg-richblack-500 sm:text-[16px] `}
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
