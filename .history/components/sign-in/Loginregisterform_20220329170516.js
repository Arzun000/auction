import React, { useState } from "react";
import Styles from "./Login.module.css";
//import { useForm } from "react-hook-form";

export const Loginregisterform = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

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
      <div className={Styles.error}>{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderLoginForm = (
    <div className="loginform mt-[40px] ">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-gray-700 border-[1px] ml-[40px] px-6 pb-[40px]"
        action="/"
      >
        <div className="w-full px-2 mt-[20px] text-left">
          <div className="uname">
            <label className="section-subtitle text-[#484848]  mt-[10px] text-[14px]">
              Your Name or email address
              <span style={{ color: "#ea7f23" }}> *</span>
            </label>
          </div>
          <input
            className="w-full h-10 px-3 border-[1px] text-[14px] rounded-full focus:outline-none focus:border-[#302e2c] focus:border-b-[1px] "
            type="text"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>

        <div className="w-full px-2 text-left">
          <div className="pass">
            <label
              className="section-subtitle text-[#484848] mt-[10px] text-[14px]"
              for="formGridCode_name"
            >
              Password <span style={{ color: "#ea7f23" }}>*</span>
            </label>
            <input
              className="w-full h-10 px-3 border-[1px] text-[14px] rounded-full focus:outline-none focus:border-[#302e2c] focus:border-b-[1px] "
              type="password"
              name="pass"
              required
            />
            {renderErrorMessage("pass")}
          </div>
          <div className="chk-box inline-flex">
            <input
              className=" h-10 px-3 border-[1px] text-[14px] focus:outline-none "
              type="checkbox"
              value="remember_me"
              id="formGridCode_name"
            />
            <label
              className="section-subtitle ml-[10px] text-[#484848]] text-[14px]"
              for="formGridCode_name"
            >
              remember Me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="py-[10px] px-[60px] ml-[10px] text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
           hover:bg-white hover:border-[#ea7f23] hover:text-[#ea7f23] font-bold focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
        >
          LOGIN
        </button>
      </form>
    </div>
  );

  const renderRegisterForm = (
    <div className="Registerform mt-[40px]  ">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-gray-700 border-[1px] ml-[40px] px-6 pb-[40px]"
        action="/"
      >
        <div className="w-full px-2 mt-[20px] text-left">
          <div className="uname">
            <label className="section-subtitle text-[#484848]  mt-[10px] text-[14px]">
              Username
              <span style={{ color: "#ea7f23" }}> *</span>
            </label>
          </div>
          <input
            className="w-full h-10 px-3 border-[1px] text-[14px] rounded-full focus:outline-none focus:border-[#302e2c] focus:border-b-[1px] "
            type="text"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>

        <div className="w-full px-2 mt-[20px] text-left">
          <div className="email">
            <label className="section-subtitle text-[#484848]  mt-[10px] text-[14px]">
              Email address
              <span style={{ color: "#ea7f23" }}> *</span>
            </label>
          </div>
          <input
            className="w-full h-10 px-3 border-[1px] text-[14px] rounded-full focus:outline-none focus:border-[#302e2c] focus:border-b-[1px] "
            type="text"
            name="email"
            required
          />
          {renderErrorMessage("email")}
        </div>

        <div className="w-full px-2 text-left">
          <div className="pass">
            <label
              className="section-subtitle text-[#484848]] mt-[10px] text-[14px]"
              for="formGridCode_name"
            >
              Password<span style={{ color: "#ea7f23" }}> *</span>
            </label>
            <input
              className="w-full h-10 px-3 border-[1px] text-[14px] rounded-full focus:outline-none focus:border-[#302e2c] focus:border-b-[1px] "
              type="password"
              name="pass"
              required
            />
            {renderErrorMessage("pass")}
          </div>
          <div className="chk-box inline-flex">
            <input
              className=" h-10 px-3 border-[1px] text-[14px] focus:outline-none "
              type="checkbox"
              value="remember_me"
              id="formGridCode_name"
            />
            <label
              className="section-subtitle ml-[10px] text-[#484848] text-[14px]"
              for="formGridCode_name"
            >
              I am a vendor
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="py-[10px] px-[60px] ml-[10px] text-sm text-white rounded-full border-[2px] border-[#ea7f23] bg-[#ea7f23]
           hover:bg-white hover:border-[#ea7f23] hover:text-[#ea7f23] font-bold focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
        >
          REGISTER
        </button>
      </form>
    </div>
  );

  return (
    <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px]">
      <div className="login text-secttl mt-[20px] mr-[40px] w-full lg:w-[50%] ">
        {/* Login form */}
        <div className="text-secttl text-center mt-[20px] text-black">
          Login
        </div>

        <div className="login-form">
          {isSubmitted ? (
            <div>User is successfully logged in</div>
          ) : (
            renderLoginForm
          )}
        </div>
      </div>
      <div className="register text-secttl  mt-[20px] mr-[40px] lg:w-[50%] ">
        <div className="text-secttl text-center mt-[20px] text-black">
          Register
        </div>
        <div className="register-form">{renderRegisterForm}</div>
      </div>
    </div>
  );
};
