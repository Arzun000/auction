import React from "react";
export default function test() {
  return (
    <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
      <div className="auctionItems row-span-2">
        <div className="image-caption bg-slate-300 m-20 text-center ">
          <div className="image-caption-one text-xl font-bold">
            <p>Super Cars</p>
          </div>
          <div className="image-caption-two pb-2">150 products</div>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm text-grey-800 rounded-full border-[1px] border-grey-400
           hover:bg-white hover:border-white hover:text-[#EA7F23] font-bold "
          >
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
