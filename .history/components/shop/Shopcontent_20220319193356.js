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
          <div className="left-nav-title mt-[40px]">
            Filter by price
            <div class="line  mt-[8px]"></div>
            {/* <input type="range" min="0" max="100" class="range"></input> */}
            <div className="mt-[20px]">
              <span id="rangeValue">0</span>
              <input
                class="range"
                type="range"
                name=""
                min="0"
                max="1000"
              ></input>
            </div>
            <div>
              <button className="btn-yellowbg">FILTER</button>
            </div>
          </div>
          <div className="left-nav-title mt-[40px]">
            Color
            <div class="line  mt-[8px]"></div>
            {/* <input type="range" min="0" max="100" class="range"></input> */}
            <form className="search-pro1 text-[14px] mt-[10px] w-[250px] rounded-lgx items-center">
              <input
                type="text"
                placeholder="Any Color"
                className="input-text text-[#cecece] bg-white text-[14px] w-full px-4 "
              />

              <div className="">
                <div>
                  <button className="btn-yellowbg mt-[10px]">APPLY</button>
                </div>
              </div>
            </form>
          </div>
          <div className="left-nav-title mt-[40px]">
            Condition
            <div class="line  mt-[8px]"></div>
            {/* <input type="range" min="0" max="100" class="range"></input> */}
            <form className="search-pro1 text-[14px] mt-[10px] w-[250px] rounded-lgx items-center">
              <input
                type="text"
                placeholder="Any Condition"
                className="input-text text-[#cecece] bg-white text-[14px] w-full px-4 "
              />

              <div className="">
                <div>
                  <button className="btn-yellowbg mt-[10px]">APPLY</button>
                </div>
              </div>
            </form>
          </div>
          <div className="left-nav-title mt-[40px]">
            Size
            <div class="line  mt-[8px]"></div>
            <div className="py-[10px]">
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Large(2)
                </div>
              </a>
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Medium(42)
                </div>
              </a>
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Small(28)
                </div>
              </a>
            </div>
          </div>
          <div className="left-nav-title mt-[40px]">
            Product Tags
            <div class="line  mt-[8px]"></div>
            <div className="py-[10px]">
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Phones
                </div>
              </a>
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">Cars</div>
              </a>
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Scooters
                </div>
              </a>
            </div>
          </div>
          <div className="left-nav-title mt-[40px]">
            Product Categories
            <div class="line  mt-[8px]"></div>
            <div className="py-[10px]">
              <div className="shop-navlinks  hover:text-[#ea7f23]">
                <a href="#" class="  hover:text-[#ea7f23]">
                  Phones
                </a>
              </div>

              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">Cars</div>
              </a>
              <a href="#" class="  hover:text-[#ea7f23]">
                <div className="shop-navlinks  hover:text-[#ea7f23]">
                  Scooters
                </div>
              </a>
            </div>
          </div>
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
