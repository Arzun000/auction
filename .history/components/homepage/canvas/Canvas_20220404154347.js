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
  console.log("ppps", props);
}
//export default function Canvas(props) {
export function Canvas(props) {
  console.log("ppp", props);
  return (
    <div>
      {/* {props.productItemLists.map((productItemList) => { */}
      <Latestauctions />
      {/* key={productItemList.id}
        name={productItemList.name}
        price={productItemList.currentBid}
        // href="/item-detail/blackcar"
        //href={"/item-detail/${productItemList.id}"}
        href={{
          pathname: "/item-detail/[slug]",
          query: { slug: productItemList.id },
        }}
        imgurl={productItemList.imgUrl}
      /> */}
      {/* })} */}
      <Canvaslow />
      <Canvasbottomone />
      <Canvasbottomtwo />
    </div>
  );
}