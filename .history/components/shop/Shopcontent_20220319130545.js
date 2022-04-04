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
              <form className="search-pro1 text-[14px] bg-white h-[60px] shadow-sh-search1 mt-[10px] rounded-lgx items-center">
                {/* <div className="input-text"> */}
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-[#cecece] text-[14px] w-full px-4 focus:outline-none"
                  //className="input-text1"
                />

                {/* <div className="search-btn h-[40px]"> */}
                <button
                  className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full 
                  border-gray-200 hover:bg-[#ea7f23] active:bg-gray-200 disabled:opacity-50 
                  focus:outline-none  shadow-sh-search"
                >
                  <img
                    src="/static/icons/search.png"
                    height={20}
                    width={20}
                  ></img>
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
          <div className="filter">Filter by price </div>
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
