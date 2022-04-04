import React, { useState } from "react";

export const Loginregisterform = () => {
  return (
    <div className="flex grid-cols-2 flex-row gap-4 my-[120px]">
      <div className="login text-secttl text-center mt-[20px] w-[50%] text-white">
        {/* Login form */}
        <div className="text-secttl text-center mt-[20px] text-black">
          Login
        </div>
        <div className="loginform"></div>
      </div>
      <div className="register text-secttl text-center mt-[20px] w-[50%] text-white">
        <div className="text-secttl text-center mt-[20px] text-black">
          Register
        </div>
      </div>
    </div>
  );
};
