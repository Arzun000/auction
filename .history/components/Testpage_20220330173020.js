import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <>
      <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
        <div className="car1 mt-[20px] ml-[40px] relative lg:w-[50%] bg-green-800 ">
          <div className="car-img">
            <img
              className="w-full object-cover h-[400px]"
              src="/images/supercar1.jpg"
            ></img>
            <div className="snake-border absolute h-[340px] w-[90%] mt-[-370px] ml-[30px] ">
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Button
              </a>
            </div>
            <div className="image-caption absolute text-center mt-[-250px] ml-[60px] ">
              <div className="text-secttl text-white ">
                <p>SUPER CARS</p>
              </div>
              <div className="image-caption-two pb-2 text-white text-left ">
                150 products
              </div>
              <div className="ml-[-120px]">
                <button type="button" className="viewButton ml-[10px]">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="car2 mt-[20px] mr-[40px] lg:w-[50%] bg-red-800 "></div>
      </div>
    </>
  );
};
