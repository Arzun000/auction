import React from "react";
export const Canvasbottom = () => {
  return (
    <>
      <canvas-bottom>
        <div className="can-btm-container">
          <div class="grid grid-rows-2 grid-cols-3 grid-flow-col bg-blue-700 p-2">
            {/* image 1 */}
            <div class="row-span-2 ">
              <div className="h-[350px] inline-flex">
                <img
                  src="/images/oldcars005.jpg"
                  className="object-fill h-full w-full"
                ></img>
                <div className="image-caption absolute text-center mt-[150px] ml-[120px]">
                  <div className="image-caption-one text-xl font-bold">
                    <p>Super Cars</p>
                  </div>
                  <div className="image-caption-two pb-2">150 products</div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    VIEW ALL ITEMS
                  </button>
                </div>
              </div>
            </div>
            {/* image-2 */}
            <div class="col-span-1 h-auto bg-yellow-400 w-auto">
              <div className="h-[175px]  inline-flex">
                <img
                  src="/images/oldcars001.jpg"
                  className="object-fill h-full w-full"
                ></img>
                <div className="image-caption absolute text-center col-end mt-[30px] ml-[275px]">
                  <div className="image-caption-one text-xl font-bold">
                    <p>VolksWagan Bus</p>
                  </div>
                  <div className="image-caption-two pb-2">Auction Ended</div>
                  <div className="image-texts h-[30px] w-[30px] bg-green-400 ml-6 absolute inline-flex ">
                    <div className="bid-now-icon rounded-full hover:bg-orange-500 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none text-base md:mt-2">
                        <img
                          src="/static/icons/hammer.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="heart-icon rounded-full hover:bg-orange-500">
                      <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                        <img
                          src="/static/icons/heart.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="search-icon rounded-full  hover:bg-orange-500">
                      <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                        <img
                          src="/static/icons/search.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 bg-yellow-300">03</div>
            <div class="col-span-1 ...">04</div>
            <div class="col-span-1 ...">05</div>
          </div>
        </div>
      </canvas-bottom>
    </>
  );
};
