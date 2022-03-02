import React from "react";

export const Canvas = () => {
  return (
    <>
      <canvas-top>
        <div className="canv-top-container">
          <img src="/images/automotive_slider.jpg"></img>
          <div className="canv-container absolute top-[25rem] left-[5rem] bg-green-200 flex  h-[16rem] w-[30rem] ">
            <div className="canv-content ">
              <div className="main-content-title ">
                <p className="font-serif text-[42px]">Find your dream car</p>
              </div>
              <div className="main-content-subtitle">
                <p className="font-sans text-[36px]">& give it a try</p>
              </div>
              <div className="main-content-subtitle mt-2">
                Vivamus id ligula non turpis aliquam dignissim. Fusce tempor
                vulputate urna, quis malesuada.
              </div>
              <div className="main-content-btn bg-blue-200 w-[120px] ">
                <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
                  <div
                    className="auc-btn font-medium text-black rounded-l-lgx
                    rounded-md hover:bg-yellow-500 focus:ring p-2
                     "
                  >
                    View Auctions
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </canvas-top>
    </>
  );
};
