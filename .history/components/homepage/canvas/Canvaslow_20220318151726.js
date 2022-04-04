import React from "react";
import Styles from "./Canvaslow.module.css";
export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[160px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}

            <div
              className="w-full h-auto bg-cover bg-center  "
              style={{
                backgroundImage: 'url("/images/ferrari1")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={Styles.svgwrapper}>
                <svg
                  height="321"
                  width="650"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    className={Styles.shape}
                    x2="40"
                    y2="40"
                    x1="640"
                    y1="40"
                    stroke="orange"
                    stroke-width="2"
                  />
                  <line
                    className={Styles.shape}
                    x2="640"
                    y2="40"
                    x1="640"
                    y1="320"
                    stroke="orange"
                    stroke-width="2"
                  />
                  <line
                    className={Styles.shape}
                    x2="640"
                    y2="320"
                    x1="40"
                    y1="320"
                    stroke="orange"
                    stroke-width="2"
                  />
                  <line
                    className={Styles.shape}
                    x2="40"
                    y2="320"
                    x1="40"
                    y1="40"
                    stroke="orange"
                    stroke-width="2"
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
            {/* Item 2 */}
            <div>
              <div className="h-[350px] w-full inline-flex">
                <div
                  className="w-full h-auto bg-cover bg-center  "
                  style={{
                    backgroundImage: 'url("/images/oldcar01.jpeg")',
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={Styles.svgwrapper}>
                    <svg
                      height="321"
                      width="650"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        className={Styles.shape}
                        x2="40"
                        y2="40"
                        x1="640"
                        y1="40"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="640"
                        y2="40"
                        x1="640"
                        y1="320"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="640"
                        y2="320"
                        x1="40"
                        y1="320"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="40"
                        y2="320"
                        x1="40"
                        y1="40"
                        stroke="orange"
                        stroke-width="2"
                      />
                    </svg>

                    {/* <img
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img> */}
                    <div className="image-caption absolute text-center mt-[-250px] ml-[60px] ">
                      <div className="text-secttl text-white">
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
            </div>
          </div>
        </div>
      </canvaslow>
    </>
  );
};
