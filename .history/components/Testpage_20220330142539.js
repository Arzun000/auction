import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
      
      <div
              className="w-full mt-[20px] mr-[40px] h-auto bg-cover bg-center  "
              style={{
                backgroundImage: 'url("/images/supercar1.jpg")',
                backgroundRepeat: "no-repeat",
              }}
            >
      <div className="Car2  mt-[20px] mr-[40px] lg:w-[50%] ">
        <div className="register-form">Ho</div>
      </div>
    </div>
  );
};
