import React from "react";
export default function test() {
  return (
    <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
      <div className="auctionItems row-span-2">
        <div className="image-caption-major bg-slate-300 m-20 text-center ">
          <div className="image-caption-one text-xl font-bold">
            <p>Super Cars</p>
          </div>
          <div className="image-caption-two pb-2">150 products</div>
          <button type="button" className="viewButton">
            VIEW ALL ITEMS
          </button>
        </div>
      </div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
      <div>0</div>
    </div>
  );
}