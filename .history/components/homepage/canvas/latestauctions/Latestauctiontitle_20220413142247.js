import React from "react";

export const Latestauctiontitle = () => {
  return (
    <div>
      <div className="section-title-list max-w-[1400px] m-auto mt-[100px] ">
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
  );
};
