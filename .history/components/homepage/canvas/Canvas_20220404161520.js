import React from "react";
import { Canvastop } from "./Canvastop";
import productItemListsData from "../../../../data/shopitem.json";
import { Latestauctions } from "./latestauctions/Latestauctions.js";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

export const Canvas = () => {
  return (
    <div>
      <Canvastop />
      <Latestauctions />
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
};
