import React from "react";
import styles from "./canvasmid.module.css";

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
      <canvasmidcards>
        <div className="canvas-cards">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5 pb-6">
            <div className="h-[250px] bg-blue-200 w-150">
              <div className="image-texts h-[30px] w-[30px] rounded-full ml-6 absolute  ">
                <div className="bid-now-icon  hover:bg-yellow-200 mt-[2px]">
                  <button class="inline-flex m-auto focus:outline-none text-base md:mt-2">
                    <img
                      src="/static/icons/hammer.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="heart-icon rounded-full hover:bg-yellow-200">
                  <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
                    <img
                      src="/static/icons/heart.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
                <div className="search-icon rounded-full  hover:bg-yellow-200">
                  <button class="inline-flex items-center focus:outline-none text-base md:mt-2">
                    <img
                      src="/static/icons/search.png"
                      height={30}
                      width={30}
                    ></img>
                  </button>
                </div>
              </div>
              <img
                class="object-fill h-full w-full"
                src="/images/car1.jpg"
              ></img>
            </div>
            <div className="h-[250px] bg-blue-200 w-150">02</div>
            <div className="h-[250px] bg-blue-200 w-150">03</div>
            <div className="h-[250px] bg-blue-200 w-150">04</div>
          </div>
        </div>
      </canvasmidcards>
    </>
  );
};
