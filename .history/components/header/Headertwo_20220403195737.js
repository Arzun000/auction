import React from "react";

export const Headertwo = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
      <div className=" mx-[20px] lg:py-4 ">
        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="container-logo p-2 ">
            <img src="/static/logo-ibid.png" height={120} width={120}></img>
          </div>

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <div className="container-search text-[14px] float-left inline-flex m-auto">
              <div className="dropdown-button h-[40px] bg-white items-center pl-2 pr-2  pt-[8px]  rounded-l-lgx">
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
              <form className="search-pro1 text-[14px] h-[40px] w-[200px] lg:w-[500px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-r-lgx items-center">
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

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <div className="cart float-right inline-flex">
                <div className="cart-text m-auto">
                  <div className="cart-text-l1">My Cart</div>
                  <div className="cart-text-l2">0 items - $0.00</div>
                </div>
                <div className="cart-icon ml-4 mt-2">
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
    </nav>
  );
};
