import React from "react";
import Styles from "./Canvaslow.module.css";
export const Canvaslow = () => {
  return (
    <>
      <canvaslow>
        <div className="canvas-low-cards mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            {/* Item 1 */}
            <div className="">01</div>
            <div className="">02</div>
          </div>
        </div>
      </canvaslow>
    </>
  );
};
