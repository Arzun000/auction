import React from "react";

export const Headertwo = () => {
  return (
    <div>
      <top-container>
        <div className="top-container  ">
          <div className="container m-auto py-2 flex  md:flex-row">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="container-search hidden float-left lg:inline-flex m-auto">
              <div className="dropdown-button h-[40px] items-center pl-2 pr-2  pt-[8px] shadow-sh-search1 rounded-l-lgx">
                <button className="inline-flex items-center  focus:outline-none text-base ">
                  <div className="cat ml-6 ">CATEGORIES</div>
                  <div className="arrow ml-20">
                    <img
                      src="/static/icons/expand_arrow.png"
                      height={15}
                      width={15}
                    ></img>
                  </div>
                </button>
              </div>
              {/* <div className="search-pro1 bg-white h-[40px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-r-lgx items-center"> */}
              <div className="input-text">
                <input
                  type="text"
                  placeholder="Search Products..."
                  // className="bg-transparent text-gray-600 px-4 focus:outline-none w-full"
                  className="input-text1"
                />
              </div>
              <div className="search-btn h-[40px]">
                <button
                  className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full 
                  border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
                  focus:outline-none  shadow-sh-search"
                >
                  <img
                    src="/static/icons/search.png"
                    height={20}
                    width={20}
                  ></img>
                </button>
              </div>
            </div>
            <button>
              <div className="cart float-right pl-[100px] inline-flex">
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
      </top-container>
    </div>
  );
};
