import React from "react";
import Styles from "./Canvaslow.module.css";
export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}
            <div
              className="w-full h-auto bg-contain border-[1px]"
              style={{
                backgroundImage: 'url("/images/oldcar01.jpg")',

                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={Styles.svgwrapper}>
                <svg
                  height="70"
                  width="650"
                  stroke="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className={Styles.shape}
                    x="40"
                    height="65"
                    width="600"
                  />
                </svg>

                {/* <img
                src="/images/oldcar01.jpg"
                className="object-fill h-full w-full"
              ></img> */}
                <div className="image-caption absolute text-center mt-[50px] ml-[80px] ">
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
                <img
                  src="/images/oldcar02.jpg"
                  className="object-fill h-full w-full"
                ></img>
                <div className="image-caption absolute text-center mt-[50px] ml-[80px] ">
                  <div className="image-caption-one text-xl font-bold">
                    <p>Super Cars</p>
                  </div>
                  <div className="image-caption-two pb-2">150 products</div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white  focus:z-10 focus:ring-2 focus:ring-blue-700
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
      </canvaslow>
    </>
  );
};
