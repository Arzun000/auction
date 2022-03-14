import React from "react";

export const Canvas = () => {
  return (
    <>
      <canvas-top>
        <div className="canv-top-container">
          <img src="/images/automotive_slider.jpg"></img>
          <div className="canv-container absolute top-[25rem] left-[5rem] flex  h-[16rem] w-[30rem] ">
            <div className="canv-content ">
              <div className="main-content-title ">
                <p className="font-serif text-[42px]">Find your dream car</p>
              </div>
              <div className="main-content-subtitle">
                <p className="font-sans text-[30px] md:text-[36px]">
                  & give it a try
                </p>
              </div>
              <div className="main-content-subtitle mt-2">
                Vivamus id ligula non turpis aliquam dignissim. Fusce tempor
                vulputate urna, quis malesuada.
              </div>
              <button className="inline-flex items-center focus:outline-none text-base md:mt-2 ">
                <div className="main-content-btn border border-black w-[120px] hover:border-none rounded-lgx ">
                  <div
                    className="auc-btn font-medium text-black 
                    rounded-lgx hover:bg-yellow-500 focus:ring p-2
                     "
                  >
                    View Auctions
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </canvas-top>
    </>
  );
};
