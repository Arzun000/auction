import React from "react";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

export const Canvas = (props) => {
  //console.log("dffh", props);
  return (
    <div className="max-w-[1400px] m-auto">
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
};
