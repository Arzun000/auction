import React from "react";
import Styles from "./Shopcontent.module.css";
import { Shopleftnav } from "./Shopleftnav";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[140px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          <Shopleftnav />
        </div>
        <div className="col-span-3 h-[100px] rounded-xl shadow-sh-search1">
          <div className="grid grid-cols-5 gap-4">
            <div class="col-start-1 col-end-3 mt-[30px] ml-[40px] inline-flex ">
              <div className="ml-[30px] mt-[4px] shadow-sh-search1 h-[30px]">
                <button className="view-icon ">
                  <img src="/static/icons/grid.png"></img>
                </button>
                <button className="view-icon ">
                  <img src="/static/icons/list.png"></img>
                </button>
              </div>
              <div className="results ml-[40px] text-[14px] text-[#484848] mt-[10px]">
                Showing 9 of 12 results
              </div>
            </div>
            <div class="col-end-6 col-span-2 mt-[30px] mr-[20px] ">
              <div className="dropdown-button w-[80%] items-center py-[8px] shadow-sh-search1 rounded-lgx">
                <button className="inline-flex items-center text-base ">
                  <div className="cat text-[14px] ml-6 ">
                    Sort auction by recently started
                  </div>
                  <div className="arrow ml-[20px]">
                    <img
                      src="/static/icons/expand_arrow.png"
                      height={15}
                      width={15}
                    ></img>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 bg-red-400 col-span-3 mt-[-290px] gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              {/*<div className="h-[320px] overflow-hidden shadow-xl">
                <div class={Styles.articleimgholder}></div>
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
                  <div className="cardtext">
                    <a href="#" className="no-underline">
                      <b>White Car</b>
                    </a>
                    <subtext>
                      <p>
                        Current Bid: <b>$4000</b>
                      </p>
                    </subtext>
                  </div>
                </div>
              </div>*/}
            </div>
            <div className="bg-green-400 overflow-hidden h-[250px]">
              <div class={Styles.articleimgholder}></div>
              <div className="bg-white absolute mt-[-20px] ">03</div>
            </div>
            <div className="bg-green-400">03</div>
            <div className="bg-green-400 ">04</div>
            <div className="bg-green-400">05</div>
            <div className="bg-green-400">06</div>
            <div className="bg-green-400 ">07</div>
            <div className="bg-green-400">08</div>
            <div className="bg-green-400">09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
