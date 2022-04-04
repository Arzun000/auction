import React from "react";
import Styles from "./Shopcontent.module.css";
import { Iconsverticalbid } from "../icons/Iconsverticalbid";
import { Iconsverticalbuy } from "../icons/Iconsverticalbuy";
import { Shopleftnav } from "./Shopleftnav";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[10px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
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
        <div className="row-span-3 col-span-3 mt-[-290px] gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-[120px]">
            {/* Item 1 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder1}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 1 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder2}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbuy />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 3 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder3}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 4 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder4}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 5 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder5}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 6 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder6}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbuy />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 7 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder7}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 8 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder8}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
            {/* car 9 */}
            <div className=" overflow-hidden h-[300px]">
              <div class={Styles.articleimgholder9}></div>
              <div className="bg-white absolute ">
                <Iconsverticalbid />
                <div className="cardtext w-[420px] md:w-[235px] lg:w-[336px] shadow-xl absolute text-center h-[80px] pt-[10px]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
