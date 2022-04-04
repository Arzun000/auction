import React from "react";
import { Shopleftnav } from "./Shopleftnav";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[20px] mt-[120px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          <Shopleftnav />
        </div>
        <div className="col-span-3 bg-blue-400 h-[120px] ">
          <div className="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 bg-blue-800">02</div>
            <div class="col-end-7 col-span-2 bg-green-800">
              <div className="dropdown-button bg-yellow-200 items-center pl-2 pr-2  pt-[8px] shadow-sh-search1 rounded-l-lgx">
                <button className="inline-flex items-center focus:outline-none text-base ">
                  <div className="cat text-[14px] text-[#cecece] ml-6 ">
                    Sort suction by recently started
                  </div>
                  <div className="arrow ml-20">
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
