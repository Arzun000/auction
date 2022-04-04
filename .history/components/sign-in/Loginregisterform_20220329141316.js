import React, { useState } from "react";
//import { useForm } from "react-hook-form";

export const Loginregisterform = () => {
  

  return (
    <div className="flex grid-cols-2 flex-row gap-4 my-[120px]">
      <div className="login text-secttl text-center mt-[20px] w-[50%] text-white">
        {/* Login form */}
        <div className="text-secttl text-center mt-[20px] text-black">
          Login
        </div>
        <div className="loginform">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
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