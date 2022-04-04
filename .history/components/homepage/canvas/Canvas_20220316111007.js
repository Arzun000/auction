import React from "react";
import { Canvastop } from "./Canvastop";

import { Canvasmid } from "./Canvasmid";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

export const Canvas = () => {
  return (
    <div>
      <Canvastop />
      <Canvasmid />
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
};
