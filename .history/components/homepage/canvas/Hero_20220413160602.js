import React from "react";

export const Hero = () => {
  return (
    <>
      <canvas-top>
        <div className="canv-top-container max-w-[1400px] m-auto">
          <img src="/images/automotive_slider.jpg"></img>
          <div className="canv-container absolute mt-[-240px] ml-[10px] lg:mt-[-550px]  flex  h-[16rem] w-[34rem] ">
            <div className="canv-content">
              <div className="main-content-title ">
                <p className="canvas-text text-[42px] md:text-[55px] text-[#f9f9f9] md:text-[]">
                  <b>Find your dream car</b>
                </p>
              </div>
              <div className="main-content-subtitle">
                <p className="canvas-subtext font-['Laila']">
                  <b>& give it a try</b>
                </p>
              </div>
              <div className="canvas-subtitle truncate mt-2 text-[#ea7f23]">
                <p>Vivamus id ligula non turpis aliquam dignissim.</p>
                <p> Fusce tempor vulputate urna, quis malesuada.</p>
              </div>
              <button
                type="button"
                className="py-2.5 px-5 my-4 mx-2 text-sm text-grey-800 rounded-full border-[2px] border-grey-800
           hover:bg-[#ea7f23] hover:border-[#ea7f23] hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 "
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
