import React from "react";

export const Shopcontent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 ml-[15px] mt-[120px] lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
        <div className="col-span-1 row-span-4 bg-gray-50 ">
          LEFT NAV BAR
          <div className="left-nav-title">
            Search for auctions
            <div class="line  mt-[8px]"></div>
            <div className="cat-search  inline-flex">
              <form className="search-pro1 text-[14px] mt-[10px] h-[40px] w-[250px] flex rounded-lgx items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="input-text text-[#cecece] bg-white text-[14px] w-full px-4 "
                />

                <div className="search-btn h-[40px]">
                  <button className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full  border-gray-200 hover:bg-[#ea7f23] ">
                    <img
                      src="/static/icons/search.png"
                      height={20}
                      width={20}
                    ></img>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="left-nav-title">
            Filter by price
            <div class="line  mt-[8px]"></div>
            <div x-data="{ price: 20 }" class="w-1/2">
              <label
                for="price"
                class="font-bold text-gray-700"
                x-text="`Price $` + price"
              ></label>
              <input
                type="range"
                min="1"
                name="price"
                max="100"
                x-model="price"
                class="w-full h-2 bg-blue-100 appearance-none"
              />
            </div>
          </div>
          {/* <input type="range" min="0" max="100" class="range"></input> */}
          <div className="color">color</div>
          <div className="condition">condition</div>
          <div className="size">size</div>
          <div className="pro-tag">Product tags</div>
          <div className="pro-cat">Product categories</div>
        </div>
        <div className="col-span-3 bg-blue-400  ">02</div>
        <div className="row-span-3 col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-green-400">01</div>
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
