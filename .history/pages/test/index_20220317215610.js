import React from "react";
export default function test() {
  return (
    <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
      <div className="auctionItems row-span-2 m-auto">
        <div className="image-caption absolute text-center ">
          <div className="image-caption-one text-xl font-bold">
            <p>Super Cars</p>
          </div>
          <div className="image-caption-two pb-2">150 products</div>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
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
