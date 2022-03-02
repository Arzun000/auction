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
              <div className="main-content-subtitle">& give it a try</div>
              <div className="main-content-subtitle">
                Vivamus id ligula non turpis aliquam dignissim. Fusce tempor
                vulputate urna, quis malesuada.
              </div>
              <div className="main-content-btn">
                <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
                  <div className="cat ml-6">CATEGORIES</div>
                  <div className="arrow ml-20 ">
                    <img
                      src="/static/icons/expand_arrow.png"
                      height={15}
                      width={15}
                    ></img>
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
