import React from "react";

export const Canvas = () => {
  return (
    <>
      <canvas-top>
        <div className="canv-top-container">
          <img src="/images/automotive_slider.jpg"></img>
          <div className="canv-container  bg-green-200 flex  h-[16rem] w-[16rem] ">
            <div className="canv-content ">
              <div className="main-content-title ">Find your dream car</div>
              <div className="main-content-subtitle">& give it a try</div>
              <div className="main-content-subtitle">
                Vivamus id ligula non turpis aliquam dignissim. Fusce tempor
                vulputate urna, quis malesuada.
              </div>
            </div>
          </div>
        </div>
      </canvas-top>
    </>
  );
};
