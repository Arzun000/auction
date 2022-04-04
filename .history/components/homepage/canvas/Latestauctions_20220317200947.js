import React from "react";
import Styles from "./latestauction.module.css";

export const Latestauctions = () => {
  return (
    <>
      <canvasmid>
        <div className="mid-canvas ">
          <div className="mid-section mt-[100px] ">
            <div className="section-title-list ">
              <div className="section-title w-[350px] h-[80px] pt-4 border-b-2 border-stone-300 m-auto text-center ">
                <h2 className="text-secttl font-['MontserratBold']">
                  LATEST AUCTIONS
                </h2>
              </div>
              <div className="section-subtitle bg-white w-[50px] m-auto pb-[20px] mt-[-15px]">
                <img
                  className="mx-auto"
                  src="/static/icons/hammermain.png"
                  height={25}
                  width={25}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </canvasmid>
      {/* list of latest auction items */}
      <canvasmidcards>
        <div className="canvas-cards pb-[30px] px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[65px] md:gap-5 lg:gap-5 ">
            {/* Item 1 */}

            <div className="h-[280px] overflow-hidden shadow-xl">
              <div class={Styles.articleimgholder}>
                {/* <div
              className="h-[250px] bg-center bg-cover  hover:bg-contain"
              style={{
                backgroundImage: 'url("/images/oldcar01.jpeg")',
                backgroundRepeat: "no-repeat",
              }}
                 > */}
              </div>
              <div className="image-texts h-[30px] w-[30px] mt-[-240px] ml-6 absolute ">
                <div className="bid-now-icon rounded-full ">
                  <button className=" hammerbutton">
                    <img src="/static/icons/hammer.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/heart.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/search1.png"></img>
                  </button>
                </div>
              </div>

              <div className="image-caption w-[331px] shadow-xl absolute bg-white text-center h-[100px] pt-[20px]">
                <div className="card-text">
                  <a href="#" className="no-underline">
                    White Car
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 2 */}
            <div className="h-[280px] overflow-hidden shadow-xl">
              <div class={Styles.articleimgholder2}>
                {/* <div
              className="h-[250px] bg-center bg-cover  hover:bg-contain"
              style={{
                backgroundImage: 'url("/images/oldcar01.jpeg")',
                backgroundRepeat: "no-repeat",
              }}
            > */}
              </div>
              <div className="image-texts h-[30px] w-[30px] mt-[-240px] ml-6 absolute ">
                <div className="bid-now-icon rounded-full ">
                  <button className=" hammerbutton">
                    <img src="/static/icons/hammer.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/heart.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/search1.png"></img>
                  </button>
                </div>
              </div>

              <div className="image-caption w-[334px] absolute shadow-xl text-center h-[100px] pt-[20px]">
                <div className="">
                  <a href="#" className="no-underline">
                    Black Car
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 3 */}
            <div className="h-[280px] overflow-hidden shadow-xl">
              <div class={Styles.articleimgholder3}>
                {/* <div
              className="h-[250px] bg-center bg-cover  hover:bg-contain"
              style={{
                backgroundImage: 'url("/images/oldcar01.jpeg")',
                backgroundRepeat: "no-repeat",
              }}
            > */}
              </div>
              <div className="image-texts h-[30px] w-[30px] mt-[-240px] ml-6 absolute ">
                <div className="bid-now-icon rounded-full ">
                  <button className=" hammerbutton">
                    <img src="/static/icons/hammer.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/heart.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/search1.png"></img>
                  </button>
                </div>
              </div>

              <div className="image-caption w-[334px] absolute shadow-xl text-center h-[100px] pt-[20px]">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Red Car
                  </a>
                </div>
                <div className="image-caption-two pb-2">Current Bid: $100</div>
              </div>
            </div>
            {/* item 4 */}
            <div className="h-[280px] overflow-hidden shadow-xl">
              <div class={Styles.articleimgholder4}>
                {/* <div
              className="h-[250px] bg-center bg-cover  hover:bg-contain"
              style={{
                backgroundImage: 'url("/images/oldcar01.jpeg")',
                backgroundRepeat: "no-repeat",
              }}
            > */}
              </div>
              <div className="image-texts h-[30px] w-[30px] mt-[-240px] ml-6 absolute ">
                <div className="bid-now-icon rounded-full ">
                  <button className=" hammerbutton">
                    <img src="/static/icons/hammer.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/heart.png"></img>
                  </button>
                </div>
                <div className="bid-now-icon rounded-full ">
                  <button className="iconbutton">
                    <img src="/static/icons/search1.png"></img>
                  </button>
                </div>
              </div>

              <div className="image-caption w-[334px] absolute text-center shadow-xl h-[100px] pt-[20px]">
                <div className="image-caption-one text-xl font-bold">
                  <a href="#" className="no-underline">
                    Blue Car
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
