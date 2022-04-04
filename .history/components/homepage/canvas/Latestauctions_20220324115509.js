import React from "react";
import Styles from "./latestauction.module.css";

export const Latestauctions = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[100px] ">
            <div className="section-title-list ">
              <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
                <h2 className="text-secttl">LATEST AUCTIONS</h2>
              </div>
              <div className="section-subtitle bg-white w-[50px] m-auto pb-[20px] mt-[-15px]">
                <img
                  className="mx-auto"
                  src="/static/icons/hammermain.png"
                  height={25}
                  width={25}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvasmid>
      {/* list of latest auction items */}

      <div classname="grid grid-cols-4 gap-4">
        <div className="bg-green-200">01</div>
        <div className="bg-green-200">02</div>
        <div className="bg-green-200">03</div>
        <div className="bg-green-200">04</div>
        <div className="bg-green-200">01</div>
        <div className="bg-green-200">02</div>
        <div className="bg-green-200">03</div>
        <div className="bg-green-200">04</div>
      </div>
    </>
  );
};