import React from "react";

export const Headertwo = () => {
  return (
    <div>
      <div className="top-container hidden md:block ">
        <div className="flex flex-wrap">
          <div className="md:w-1/5 pl-[20px]">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={120} width={120}></img>
            </div>
          </div>
          <div className="md:w-3/5 px-4">
            <div className="container-search text-[14px] float-left inline-flex m-auto">
              <div className="dropdown-button h-[40px] bg-white items-center pl-2 pr-2  pt-[8px] shadow-sh-search1 rounded-l-lgx">
                <button className="inline-flex items-center focus:outline-none text-base ">
                  <div className="cat text-[14px] text-[#cecece] ml-6 ">
                    Categories
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
              <form className="search-pro1 text-[14px] bg-white h-[40px] w-[200px] lg:w-[350px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-r-lgx items-center">
                {/* <div className="input-text"> */}
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-[#cecece] text-[14px] w-full px-4 focus:outline-none"
                  //className="input-text1"
                />

                <div className="search-btn h-[40px]">
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
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button>
              <div className="cart float-right inline-flex">
                <div className="cart-text m-auto">
                  <div className="cart-text-l1">My Cart</div>
                  <div className="cart-text-l2">0 items - $0.00</div>
                </div>
                <div className="cart-icon ml-4 mr-4 mt-2">
                  <img
                    src="/static/icons/basket.png"
                    height={30}
                    width={30}
                  ></img>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
