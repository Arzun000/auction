import React from "react";
import Styles from "./homepage/canvas/Canvaslow.module.css";
export const Testpage = () => {
  return (
    <div className="lg:flex grid-cols-1 lg:grid-cols-2 flex-row gap-16 mt-[10px] mb-[40px]">
      <div
        className="w-full h-[400px] mt-[20px] mx-[40px] bg-cover bg-center  "
        style={{
          backgroundImage: 'url("/images/supercar1.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={Styles.svgwrapper}>
          <svg height="321" width="650" xmlns="http://www.w3.org/2000/svg">
            <line
              className={Styles.shape}
              x2="40"
              y2="40"
              x1="640"
              y1="40"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="640"
              y2="40"
              x1="640"
              y1="320"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="640"
              y2="320"
              x1="40"
              y1="320"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="40"
              y2="320"
              x1="40"
              y1="40"
              stroke="orange"
              strokeWidth="2"
            />
          </svg>

          {/* <img
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img> */}
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
      <div
        className="w-[50%] h-[400px] mt-[20px] mx-[40px] bg-cover bg-center  "
        style={{
          backgroundImage: 'url("/images/supercar1.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={Styles.svgwrapper}>
          <svg height="321" width="650" xmlns="http://www.w3.org/2000/svg">
            <line
              className={Styles.shape}
              x2="40"
              y2="40"
              x1="640"
              y1="40"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="640"
              y2="40"
              x1="640"
              y1="320"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="640"
              y2="320"
              x1="40"
              y1="320"
              stroke="orange"
              strokeWidth="2"
            />
            <line
              className={Styles.shape}
              x2="40"
              y2="320"
              x1="40"
              y1="40"
              stroke="orange"
              strokeWidth="2"
            />
          </svg>

          {/* <img
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img> */}
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
    </div>
  );
};
