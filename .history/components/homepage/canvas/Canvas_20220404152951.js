import React from "react";
import { Canvastop } from "./Canvastop";

import { Latestauctions } from "./latestauctions/Latestauctions.js";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

import productItemListsData from "../../../data/shopitem.json";

export async function getStaticProps(context) {
  return {
    props: { productItemLists: productItemListsData },
  };
}
// export default function Canvas(props)
export const Canvas = (props) => {
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
