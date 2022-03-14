import React from "react";

export const Test = () => {
  return (
    <>
      <div class="flex">
        <div className="header-top-container p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-yellow-100">
          <div className="top-cont-left inline-flex col-span-2 gap-1">
            <div class="w-1/5 bg-gray-500 h-12"></div>
            <div class="w-3/5 bg-gray-400 h-12"></div>
            <div class="w-1/5 bg-gray-500 h-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};
