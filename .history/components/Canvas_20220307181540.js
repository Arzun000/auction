import React from "react";

export const Canvas = () => {
  return (
    <>
      <canvas-top>
        <div className="canv-top-container bg-green-200">
          <img src="/images/automotive_slider.jpg"></img>
          <div className="canv-container absolute mt-[-240px] ml-[-60px] lg:mt-[-550px] lg:ml-[0] left-[5rem] flex  h-[16rem] w-[30rem] ">
            <div className="canv-content">
              <div className="main-content-title ">
                <p className=" font-sans text-[36px] md:text-[42px]">
                  Find your dream car
                </p>
              </div>
              <div className="main-content-subtitle">
                <p className="font-sans text-[30px] md:text-[36px]">
                  & give it a try
                </p>
              </div>
              <div className="main-content-subtitle truncate mt-2">
                <p>Vivamus id ligula non turpis aliquam dignissim.</p>
                <p> Fusce tempor vulputate urna, quis malesuada.</p>
              </div>
              <button
                type="button"
                className="py-2.5 px-5 my-4 mx-2 text-sm text-grey-800 rounded-full border-[2px] border-grey-800
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
              >
                VIEW AUCTIONS
              </button>
            </div>
          </div>
        </div>
      </canvas-top>
    </>
  );
};
