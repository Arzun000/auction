import React, { useState } from "react";
import Styles from "./Login.module.css";
//import { useForm } from "react-hook-form";

export const Loginregisterform = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = (
    <div className="form">
      {/* <form onSubmit={handleSubmit}>
        <div className="">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={Styles.buttoncontainer}>
          <input type="submit" />
        </div>
      </form> */}
      <form className="space-y-4 text-gray-700 px-6" action="/">
        <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div className="w-full px-2 md:w-1/2">
            <label className="block mb-1">
              Your Name or email adderss{" "}
              <span style={{ color: "#ea7f23" }}>*</span>
            </label>
            <input
              className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
              type="text"
              id="formGridCode_name"
            />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="block mb-1">Last name:</label>
            <input
              className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
              type="text"
              id="formGridCode_last"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div className="w-full px-2 md:w-1/2">
            <label className="block mb-1" for="formGridCode_name">
              email: <span style={{ color: "#ea7f23" }}>*</span>
            </label>
            <input
              className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
              type="text"
              id="formGridCode_name"
            />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="block mb-1">
              Subject: <span style={{ color: "#ea7f23" }}>*</span>
            </label>
            <input
              className="w-full h-10 px-3 border-b-[1px]  focus:outline-none focus:border-b-[#ea7f23] focus:border-b-[1px] "
              type="text"
              id="formGridCode_last"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="textarea"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="py-[10px] w-full text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
           hover:bg-white hover:border-[#ea7f23] hover:text-[#ea7f23] font-bold focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );

  return (
    <div className="flex grid-cols-2 flex-row gap-4 my-[120px]">
      <div className="login text-secttl text-center mt-[20px] w-[50%] text-red-300">
        {/* Login form */}
        <div className="text-secttl text-center mt-[20px] text-black">
          Login
        </div>
        <div className="loginform">
          <div className="login-form">
            {isSubmitted ? (
              <div>User is successfully logged in</div>
            ) : (
              renderForm
            )}
          </div>
        </div>
      </div>
      <div className="register text-secttl text-center mt-[20px] w-[50%] text-white">
        <div className="text-secttl text-center mt-[20px] text-black">
          Register
        </div>
      </div>
    </div>
  );
};
