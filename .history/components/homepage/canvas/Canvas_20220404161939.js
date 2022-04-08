import React from "react";
import { Canvastop } from "./Canvastop";
import productItemListsData from "../../../data/shopitem.json";
import { Latestauctions } from "./latestauctions/Latestauctions.js";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}
const Canvas = (props) => {
  //export const Canvas = (props) => {
  console.log("dffh", props);
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
export  Canvas;
