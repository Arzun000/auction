import React from "react";
// import { Canvastop } from "./Hero";

import { Latestauctiontitle } from "./latestauctions/Latestauctiontitle.js";
import { Latestauctions } from "./latestauctions/Latestauctions.js";
import { Canvaslow } from "./Canvaslow";
import { Canvasbottomone } from "./Canvasbottomone";
import { Canvasbottomtwo } from "./Canvasbottomtwo";

// export async function getStaticProps(context) {
//   return {
//     props: { productItemLists: productItemListsData },
//   };
// }
//const Canvas = (props) => {
export const Canvas = (props) => {
  //console.log("dffh", props);
  return (
    <div className="max-w-[1400px] m-auto">
      {/* <Canvastop /> */}
      {/* <Latestauctiontitle /> */}
      {/* <Latestauctions /> */}
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
};
