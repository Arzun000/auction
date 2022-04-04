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
              {/* <form className="search-pro1 h-[40px] shadow-sh-search1 mt-[10px] rounded-lgx ">
                {/* <div className="input-text"> 
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-[#cecece] text-[14px] w-full pl-[20px] mt-[-20px] focus:outline-none"
                  //className="input-text1"
                />

                <button className="ml-[-40px] mt-[-20px]">
                  <img
                    src="/static/icons/search.png"
                    className="iconbutton  mt-[20px] p-[6px] "
                  ></img>
                </button>
                {/* </div> 
              </form> */}
              <form className="example m-auto mw-300px" action="">
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit">
                  <img
                    className="iconbutton absolute mt-[-20px] bg-yellow-200"
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
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
