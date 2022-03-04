import React from "react";
export const Canvasbottomtwo = () => {
  return (
    <>
      <canvas-bottom>
        <div className="can-btm-container">
          <div className="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 bg-gray-200 p-2">
            {/* image 1 */}
            <div class="row-span-2 m-auto ">
              <div className="h-[350px] inline-flex">
                <img
                  src="/images/ferrari2.jpg"
                  className="object-fill h-full w-full"
                ></img>
                <div className="image-caption absolute text-center mt-[150px] ml-[120px]">
                  <div className="image-caption-one text-xl font-bold">
                    <p>Ferrari</p>
                  </div>
                  <div className="image-caption-two pb-2">56 products</div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm  text-grey-800 rounded-full border-[2px] border-grey-400
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    VIEW ALL ITEMS
                  </button>
                </div>
              </div>
            </div>
            {/* image-2 */}
            <div className="col-span-1 h-auto relative bg-white w-auto">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/ferrari1.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Red Ferrari</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    Auction Ended
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/hammer.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/heart.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
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
            {/* item 3 */}
            <div className="col-span-1 bg-white">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/ferrari3.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Ferrari Spoiler</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    $2000
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/hammer.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/heart.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
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
            {/* item 4 */}
            <div className="col-span-1 bg-white">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/ferrari4.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Yellow Ferrari</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    $7500
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/hammer.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/heart.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
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
            {/* item -5 */}
            <div className="col-span-1 bg-white">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/ferrari5.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Black Ferrari</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    Auction Ended
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/hammer.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                        <img
                          src="/static/icons/heart.png"
                          height={30}
                          width={30}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full p-3 mt-[2px]">
                      <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
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
          </div>
        </div>
      </canvas-bottom>
    </>
  );
};
