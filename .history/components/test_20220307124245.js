import React from "react";

export const Test = () => {
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
        <div className="grid grid-cols-1 md:flex-row md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* <item1> */}

          <div className="items-container-1 bg-lime-400 p-2">
            <div>
              <img className="object-fill" src="/images/car1.jpg"></img>
            </div>
            <div className="canv-container absolute flex mt-[-200px]">
              <div className="image-icons ml-6 ">
                <div className="bid-now-icon rounded-full ">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
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
            <div className="image-caption text-center bg-gray-100">
              <div className="image-caption-one text-xl font-bold">
                <a href="#" className="no-underline">
                  Item Info
                </a>
              </div>
              <div className="image-caption-two pb-2">Current Bid: $100</div>
            </div>
          </div>
          <div className="items-container-1 bg-lime-400 p-2">
            <div>
              <img src="/images/car1.jpg" height={30} width={30}></img>
            </div>
            <div className="canv-container absolute flex mt-[-200px]">
              <div className="image-icons ml-6 ">
                <div className="bid-now-icon rounded-full ">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img src="/static/icons/hammer.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full">
                  <button className="inline-flex m-auto focus:outline-none hover:bg-orange-500 rounded-full text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
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
      </canvasmidcards>
    </>
  );
};
