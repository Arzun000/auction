import React from "react";
// import { Canvastop } from "./Hero";

import { Latestauctiontitle } from "./latestauctions/Latestauctiontitle.js";
import { Latestauctions } from "./latestauctions/Latestauctions.js";
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
