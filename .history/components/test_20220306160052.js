import React from "react";

export const Test = () => {
  return (
    <>
      {/* <div className="top-container bg-green-400 "> */}
      <div className="langcur-container m-auto py-2 flex  md:flex-row">
        <div className="lang-container-logo p-2 ">
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
        <div className="header-top-contact-methods hidden lg:inline-flex m-auto">
          <div className="header-top-contact-phone ">
            Call us toll free: +40 712 345 678
          </div>
          <div className="header-top-contact-email  mx-4">
            Send us an email: sale@modeltheme.com
          </div>
        </div>
        <button>
          <div className="icons-right float-right inline-flex">
            <div className="order inline-flex mr-2 p-0">
              <img
                src="/static/icons/truck.png"
                className="p-[4px]"
                height={25}
                width={25}
              ></img>
              Order Tracking
            </div>
            <div className="wish inline-flex">
              <img
                src="/static/icons/heart.png"
                className="p-[4px]"
                height={25}
                width={25}
              ></img>
              Wish List
            </div>
          </div>
        </button>
      </div>
      {/* </div> */}
    </>
  );
};
