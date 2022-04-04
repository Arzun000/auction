import React from "react";
import { Canvastop } from "../components/homepage/canvas/Canvastop";

import { Canvasmid } from "../components/homepage/canvas/Canvasmid";
import { Canvaslow } from "../components/homepage/canvas/Canvaslow";
import { Canvasbottomone } from "../components/homepage/canvas/Canvasbottomone";
import { Canvasbottomtwo } from "../components/homepage/canvas/Canvasbottomtwo";

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
