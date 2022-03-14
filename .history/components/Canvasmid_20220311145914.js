import React from "react";
//import styles from "./canvasmid.module.css";

export const Canvasmid = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[100px] ">
            <div className="section-title-list ">
              <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center text-3xl font-bold ">
                <h2>LATEST AUCTIONS</h2>
              </div>
              <div className="section-subtitle bg-white w-[50px] m-auto mt-[-15px]">
                <img
                  src="/static/icons/hammer.png"
                  height={35}
                  width={35}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvasmid>
      {/* list of latest auction items */}
      <canvasmidcards>
        <div className="canvas-cards ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[65px] md:gap-4 lg:gap-4 p-5 pb-6">
            {/* Item 1 */}
            <div className="h-[250px]">
              <div className="image-texts h-[30px] w-[30px]  ml-6 absolute ">
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/search.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
              </div>
              <img
                className="object-fill h-full w-full hover:zoom-0.5"
                src="/images/car1.jpg"
              ></img>
              <div className="image-caption text-center bg-gray-100">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Item Info
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 2 */}
            <div className="h-[250px] bg-blue-200 w-150">
              <div className="image-texts h-[30px] w-[30px]  ml-6 absolute ">
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/search.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
              </div>
              <img
                className="object-fill h-full w-full"
                src="/images/car2.jpg"
              ></img>
              <div className="image-caption text-center  bg-gray-100">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Item Info
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 3 */}
            <div className="h-[250px] bg-blue-200 w-150">
              <div className="image-texts h-[30px] w-[30px]  ml-6 absolute ">
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/search.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
              </div>
              <img
                className="object-fill h-full w-full"
                src="/images/car3.jpg"
              ></img>
              <div className="image-caption text-center bg-gray-100">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Item Info
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 4 */}
            <div className="h-[250px] w-150">
              <div className="image-texts h-[30px] w-[30px]  ml-6 absolute ">
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full mt-[2px]">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/search.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
              </div>
              <img
                className="object-fill h-full w-full"
                src="/images/car4.jpg"
              ></img>
              <div className="image-caption text-center bg-gray-100">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Item Info
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
          </div>
        </div>
      </canvasmidcards>
    </>
  );
};
