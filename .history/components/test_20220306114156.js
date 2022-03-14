import React from "react";

export const Test = () => {
  return (
    <>
      <div className="top-container ">
        <div className="container m-auto py-2 flex  md:flex-row">
          <div className="container-logo p-2 ">
            <img src="/static/logo-ibid.png" height={150} width={150}></img>
          </div>
          <div className="search-container h-[auto] w-auto py-4 bg-blue-500">
            <div className="search-box bg-green-400">
              <div className="cat-list ">
                <div className="dropdown-button h-12 w-50 pl-2 pr-2 bg-white rounded-l-lgx">
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
