import React from "react";

export const Test = () => {
  return (
    <>
      <div className="header-top w-full px-[70px] bg-gray-100 inline-flex">
        <div className="header-top-container p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-yellow-100">
          <div className="top-cont-left inline-flex col-span-3 bg-blue-400 p-[2px] gap-1">
            <div className="w-[10%] bg-gray-500 h-12"></div>
            <div className="w-3/5 bg-gray-400 h-12"></div>
            <div className="w-1/5 bg-gray-500 h-12"></div>
          </div>

          <div className="bg-gray-500 h-12"></div>
        </div>
      </div>
    </>
  );
};
