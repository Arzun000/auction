import React from "react";

export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[50px]">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}
            <div className="h-[350px] w-150 bg-blue-200">
              <img src="/images/oldcar01.jpg"></img>
              <div className="canv-container absolute top-[25rem] left-[5rem] flex  h-[16rem] w-[30rem] ">
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
              <button class="inline-flex items-center focus:outline-none text-base md:mt-2 ">
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

            <div>02</div>
          </div>
        </div>
      </canvaslow>
    </>
  );
};
