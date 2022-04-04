import React from "react";

export const Iconsverticalbuy = () => {
  return (
    <div>
      <div className="image-texts h-[30px] w-[30px] mt-[-250px] ml-6 absolute ">
        <div className="bid-now-icon rounded-full ">
          <button className=" basketbutton">
            <img src="/static/icons/basket.png"></img>
          </button>
        </div>
        <div className="bid-now-icon rounded-full ">
          <button className="iconbutton">
            <img src="/static/icons/heart.png"></img>
          </button>
        </div>
        <div className="bid-now-icon rounded-full ">
          <button className="iconbutton">
            <img src="/static/icons/search1.png"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
