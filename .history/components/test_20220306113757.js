import React from "react";

export const Test = () => {
  return (
    <>
      <div className="top-container ">
        <div className="container m-auto py-2 flex  md:flex-row">
          <div className="container-logo p-2 ">
            <img src="/static/logo-ibid.png" height={150} width={150}></img>
          </div>
          <div className="search h-[auto] w-[150px] py-6 bg-blue-500">ssss</div>
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
