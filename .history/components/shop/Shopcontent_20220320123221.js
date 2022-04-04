import React from "react";
import { Shopleftnav } from "./Shopleftnav";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[120px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          <Shopleftnav />
        </div>
        <div className="col-span-3 bg-blue-100 h-[120px] ">
          <div className="grid grid-cols-5 gap-4">
            <div class="col-start-1 col-end-3 mt-[20px] ">
              <div className="ml-[10px]">
                <button className="view-icon ">
                  <img src="/static/icons/grid.png"></img>
                </button>
                <button className="view-icon ">
                  <img src="/static/icons/list.png"></img>
                </button>
              </div>
            </div>
            <div class="col-end-6 col-span-2 mt-[20px] mr-[20px] ">
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
        <div className="row-span-3 bg-red-400 col-span-3 mt-[-280px] gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-green-400 ">01</div>
            <div className="bg-green-400">02</div>
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
