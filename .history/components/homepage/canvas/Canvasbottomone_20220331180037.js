import React from "react";
import Styles from "./Canvasbottomone.module.css";
export const Canvasbottomone = () => {
  return (
    <div className="CanvasBottom mt-[40px]">
      <div class="grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col gap-4 p-2">
        <div className="snake-border absolute h-[340px] w-[90%] mt-[-270px] ml-[30px] "></div>
        <div
          className="auctionItemMajor row-span-2"
          style={{
            backgroundImage: ' url("./images/old/oldcar06.jpg") ',
          }}
        >
          <div className="image-caption-major m-20 p-2 text-center ">
            <div className="image-caption-one ">
              <p>Vintage Cars</p>
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
          <div className={Styles.auctionItem2}></div>
          <div className="image-caption w-auto m-auto text-center">
            <div className="image-caption-minor pb-[10px]">
              <a href="#" className="no-underline">
                <b>Duesenberg</b>
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
        {/* Item 3 */}
        <div class=" col-span-1 h-auto relative w-auto shadow-box-sh  inline-flex">
          <div className={Styles.auctionItem3}></div>
          <div className="image-caption w-auto m-auto text-center">
            <div className="image-caption-minor pb-[10px]">
              <a href="#" className="no-underline">
                <b>Volkwagen Beetle</b>
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
        {/* item 4 */}
        <div class=" col-span-1 h-auto relative w-auto shadow-box-sh  inline-flex">
          <div className={Styles.auctionItem4}></div>
          <div className="image-caption w-auto m-auto text-center">
            <div className="image-caption-minor pb-[10px]">
              <a href="#" className="no-underline">
                <b>Volkwagen Party Bus</b>
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
        {/* Item 5 */}
        <div class=" col-span-1 h-auto relative w-auto shadow-box-sh  inline-flex">
          <div className={Styles.auctionItem5}></div>
          <div className="image-caption w-auto m-auto text-center">
            <div className="image-caption-minor pb-[10px]">
              <a href="#" className="no-underline">
                <b>Ford Roadster</b>
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
  );
};
