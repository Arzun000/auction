import React from "react";
import Styles from "./Canvaslow.module.css";
export const Canvaslow = () => {
  return (
    <>
      <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-5 mt-[60px] ">
        <div className="car1 mt-[20px] ml-[10px] relative lg:w-[50%] ">
          <div className="car-img">
            <img
              className="w-full object-cover h-[400px]"
              src="/images/supercar1.jpg"
            ></img>
            <div className="snake-border absolute h-[340px] w-[90%] mt-[-370px] ml-[30px] "></div>
            <div className="img-cap absolute text-center mt-[-250px] ml-[60px] ">
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
        <div className="car1 mt-[20px] mr-[10px] relative lg:w-[50%] ">
          <div className="car-img">
            <img
              className="w-full object-cover h-[400px]"
              src="/images/car5.jpeg"
            ></img>
            <div className="snake-border absolute h-[340px] w-[90%] mt-[-370px] ml-[30px] "></div>
            <div className="image-caption absolute text-center mt-[-250px] ml-[60px] ">
              <div className="text-secttl text-white ">
                <p>VINTAGE CARS</p>
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
      </div>
    </>
  );
};
