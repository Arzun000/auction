import React from "react";
export default function test() {
  return (
    <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
      <div
        className="auctionItemMajor row-span-2"
        style={{
          backgroundImage: ' url("./images/car3.jpg") ',
        }}
      >
        <div className="image-caption-major bg-slate-300 m-20 p-2 text-center ">
          <div className="image-caption-one ">
            <p>Super Cars</p>
          </div>
          <div className="image-caption-two pb-2">
            <b>150 </b>products
          </div>
          <button type="button" className="viewButton">
            VIEW ALL ITEMS
          </button>
        </div>
      </div>
      {/* {*item 2*} */}

      <div class=" col-span-1 h-auto relative w-auto shadow-box-sh  inline-flex">
        <div className="auctionItemsMinor"></div>
        <div className="image-caption w-auto m-auto text-center">
          <div className="cardtext">
            <a href="#" className="no-underline">
              <b>Red Car</b>
            </a>
            <subtext>
              <p>
                Current Bid: <b>$4000</b>
              </p>
            </subtext>
          </div>
          <div className="image-icons inline-flex">
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
                <img src="/static/icons/heart.png" height={20} width={20}></img>
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
      <div>0</div>
      <div>0</div>
      <div>0</div>
    </div>
  );
}
