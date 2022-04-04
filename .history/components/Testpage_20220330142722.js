import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
        {/* Item 1 */}

        <div
          className="w-full h-auto bg-cover bg-center  "
          style={{
            backgroundImage: 'url("/images/supercar1.jpg")',
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="Car2  mt-[20px] mr-[40px] lg:w-[50%] ">
        <div className="register-form">Ho</div>
      </div>
    </div>
  );
};
