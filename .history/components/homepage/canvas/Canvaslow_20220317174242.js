import React from "react";
import Styles from "./Canvaslow.module.css";
export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}

            <div
              className="w-full h-auto bg-cover bg-center  "
              style={{
                backgroundImage: 'url("/images/oldcar01.jpeg")',
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={Styles.svgwrapper}>
                <svg
                  height="280"
                  width="700"
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
                    y2="280"
                    x1="40"
                    y1="280"
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
                  <div className="image-caption-one text-xl font-bold">
                    <p>Super Cars</p>
                  </div>
                  <div className="image-caption-two pb-2">150 products</div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm  text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div>
              <div className="h-[350px] w-full inline-flex">
                <div
                  className="w-full h-auto bg-cover bg-center  "
                  style={{
                    backgroundImage: 'url("/images/oldcar02.jpg")',
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={Styles.svgwrapper}>
                    <svg
                      height="280"
                      width="650"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        className={Styles.shape}
                        x2="1"
                        y2="1"
                        x1="600"
                        y1="1"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="600"
                        y2="1"
                        x1="600"
                        y1="280"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="600"
                        y2="280"
                        x1="1"
                        y1="280"
                        stroke="orange"
                        stroke-width="2"
                      />
                      <line
                        className={Styles.shape}
                        x2="1"
                        y2="280"
                        x1="1"
                        y1="1"
                        stroke="orange"
                        stroke-width="2"
                      />
                    </svg>

                    {/* <img
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img> */}
                    <div className="image-caption absolute text-center mt-[-250px] ml-[60px] ">
                      <div className="image-caption-one text-xl font-bold">
                        <p>Super Cars</p>
                      </div>
                      <div className="image-caption-two pb-2">150 products</div>
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm  text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        VIEW MORE
                      </button>
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
