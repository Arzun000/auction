import React from "react";

export const Canvasmid = () => {
  return (
    <>
      <canvas-mid>
        <div className="mid-canvas bg-orange-200 ">
          <div className="mid-section mt-[100px]  ">
            <div className="section-title-list flex-column ">
              <div className="section-title w-[350px] pt-2 m-auto text-center text-3xl font-bold bg-blue-200">
                <h2>LATEST AUCTIONS</h2>
              </div>
              <div className="section-subtitle bg-green-200 w-[50px] margin-auto">
                <img
                  src="/static/icons/hammer.png"
                  height={35}
                  width={35}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvas-mid>
    </>
  );
};
