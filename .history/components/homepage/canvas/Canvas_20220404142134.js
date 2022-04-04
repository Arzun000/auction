import React from "react";
import { Canvastop } from "./Canvastop";

import { recentAuction } from "./latestauctions/index.js";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

export const Canvas = () => {
  return (
    <div>
      <Canvastop />
      <recentAuction />
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
};