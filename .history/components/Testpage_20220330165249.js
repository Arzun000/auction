import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <>
      <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
        <div className="car1 mt-[20px] absolute ml-[40px] lg:w-[50%] ">
          <div className="car-border h-[20px] bg-red-400 mt-[200px]"></div>
          <div
            className="w-full h-[400px] bg-cover bg-center  "
            style={{
              backgroundImage: 'url("/images/supercar1.jpg")',
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="car2 mt-[20px] mr-[40px] lg:w-[50%] "></div>
      </div>
    </>
  );
};
