import React from "react";
export default function test() {
  return (
    <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
      <div className="auctionItemMajor row-span-2">
        <div className="image-caption-major bg-slate-300 m-20 p-2 text-center ">
          <div className="image-caption-one text-xl font-bold">
            <p>Super Cars</p>
          </div>
          <div className="image-caption-two pb-2">
            <b>150 </b>products
          </div>
          <button type="button" className="viewButton">
            VIEW ALL ITEMS
          </button>
        </div>
      </div>
      {/* {*item 2*} */}

      <div class=" col-span-1 h-auto relative w-auto shadow-box-sh">
        <div className="auctionItemsMinor mx-auto"></div>
      </div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
    </div>
  );
}
