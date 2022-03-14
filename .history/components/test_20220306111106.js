import React from "react";

export const Test = () => {
  return (
    <>
      <div className="top-container ">
        <div className="container m-auto py-2 flex  md:flex-row">
          <div className="container-logo p-2 ">
            <img src="/static/logo-ibid.png" height={150} width={150}></img>
          </div>
          <div className="container-search mt-10 bg-blue-300 h-[120px] pt-[20px] inline-flex m-auto">
            <div className="cat-list ">
              <div className="dropdown-button h-12  w-50 pt-2 pl-2 pr-2 bg-white rounded-l-lgx">
                <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                  <div className="cat ml-6">CATEGORIES</div>
                  <div className="arrow ml-20 ">
                    <img
                      src="/static/icons/expand_arrow.png"
                      height={15}
                      width={15}
                    ></img>
                  </div>
                </button>
              </div>
            </div>
            <div className="cat-search inline-flex">
              <div className="search-pro bg-gray-100 h-12 w-80 border-gray-200 flex items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="search-btn ">
                <button
                  className="py-2 h-12 px-4 bg-white text-gray-600 rounded-full 
        border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
        focus:outline-none rounded-l-lgx"
                >
                  <img
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
            </div>
          </div>
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
    </>
  );
};
