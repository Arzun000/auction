import React from "react";

export const Test = () => {
  return (
    <>
      <div className="top-container bg-green-400 ">
        <div className="container m-auto py-2 flex  md:flex-row">
          <div className="container-logo p-2 ">
            <div className="language-box w-14 pl-2 border-r border-gray-400 items-center inline-flex ">
              EN
              <img
                src="/static/icons/expand_arrow.png"
                height={15}
                width={15}
              ></img>
            </div>
            <div className="currency-box w-16 items-center pl-4 inline-flex">
              EUR
              <img
                src="/static/icons/expand_arrow.png"
                height={15}
                width={15}
              ></img>
            </div>
          </div>
          <div className="header-top-contact-methods inline-flex m-auto">
            <div className="header-top-contact-phone ">
              Call us toll free: +40 712 345 678
            </div>
            <div className="header-top-contact-email  mx-4">
              Send us an email: sale@modeltheme.com
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
