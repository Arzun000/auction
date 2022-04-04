import React from "react";
export const Canvasbottomone = () => {
  return (
    <>
      <canvas-bottom>
        <div className="can-btm-container mt-[90px]">
          <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
            {/* image 1 */}
            <div class="row-span-2 m-auto ">
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
                    className="py-2.5 px-5 mr-2 mb-2 text-sm text-grey-800 rounded-full border-[2px] border-grey-400
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
            <div class="col-span-1 h-auto relative bg-gray-100 w-auto">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars001.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>VolksWagan Bus</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    Auction Ended
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3">
                      <button className=" hammerbutton">
                        <img
                          src="/static/icons/hammer.png"
                          height={15}
                          width={15}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full  mx-[10px]">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/heart.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full mx-[10px] ">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/search1.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item 3 */}
            <div class="col-span-1 bg-gray-100">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars002.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Vintage Car One</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    $8000
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3">
                      <button className=" hammerbutton">
                        <img
                          src="/static/icons/hammer.png"
                          height={15}
                          width={15}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full  mx-[10px]">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/heart.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full mx-[10px] ">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/search1.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item 4 */}
            <div class="col-span-1 bg-gray-100">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars003.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Vintage Car Two</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    Auction Ended
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3">
                      <button className=" hammerbutton">
                        <img
                          src="/static/icons/hammer.png"
                          height={15}
                          width={15}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full  mx-[10px]">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/heart.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full mx-[10px] ">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/search1.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* item -5 */}
            <div class="col-span-1 bg-gray-100">
              <div className="h-[175px] inline-flex">
                <div className="image w-[180px] m-auto pl-2">
                  <img
                    src="/images/oldcars004.jpg"
                    className="object-fill h-full w-full"
                  ></img>
                </div>
                <div className="image-caption w-auto m-auto">
                  <div className="image-caption-one text-l ml-[20px] text-center font-bold">
                    <p>Vintage Car Red</p>
                  </div>
                  <div className="image-caption-two ml-[20px] text-center pb-2">
                    Auction Ended
                  </div>
                  <div className="image-icons ml-6 inline-flex">
                    <div className="bid-now-icon rounded-full p-3">
                      <button className=" hammerbutton">
                        <img
                          src="/static/icons/hammer.png"
                          height={15}
                          width={15}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full  mx-[10px]">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/heart.png"
                          height={20}
                          width={20}
                        ></img>
                      </button>
                    </div>
                    <div className="bid-now-icon rounded-full mx-[10px] ">
                      <button className="iconbutton">
                        <img
                          src="/static/icons/search1.png"
                          height={20}
                          width={20}
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
