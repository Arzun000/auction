import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
      <div className="login text-secttl mt-[20px] mr-[40px] lg:w-[50%] ">
        <div className="login-form">hello</div>
      </div>
      <div className="register text-secttl  mt-[20px] mr-[40px] lg:w-[50%] ">
        <div className="register-form">Ho</div>
      </div>
    </div>
  );
};