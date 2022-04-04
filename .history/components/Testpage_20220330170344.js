import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <>
      <div className="lg:flex grid-cols-1 lg:grid-cols-2 h-[400px] flex-row gap-16 mt-[10px] mb-[40px]">
        <div className="car1 mt-[20px] ml-[40px] lg:w-[50%] bg-green-800 ">
          <div className="car-img">
          <div
              className="w-full h-auto bg-cover bg-center  "
              style={{
                backgroundImage: 'url("/images/supercar1.jpg")',
                backgroundRepeat: "no-repeat",
              }}
            >
          </div>
        </div>
        <div className="car2 mt-[20px] mr-[40px] lg:w-[50%] bg-red-800 "></div>
      </div>
    </>
  );
};
