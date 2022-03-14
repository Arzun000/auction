import React from "react";

export const Test = () => {
  return (
    <>
      <div className="container navbar bg-[#ea7f23] m-auto py-2 flex  md:flex-row">
        <div className="dropdown-button  p-2 ">
          <button>
            <div className="icons-right float-right pl-[50px] inline-flex">
              <div className="categories inline-flex mr-2 p-0">
                <img
                  src="/static/icons/menu_50px.png"
                  height={30}
                  width={30}
                ></img>
                Categories
              </div>
            </div>
          </button>
          <div className="currency-box w-16 items-center pl-4 inline-flex">
            EUR
            <img
              src="/static/icons/expand_arrow.png"
              height={15}
              width={15}
            ></img>
          </div>
        </div>
        <div className="header-top-contact-methods ml-[2px] hidden float-left lg:inline-flex m-auto">
          <div className="header-top-contact-phone ">
            Call us toll free: +40 712 345 678
          </div>
          <div className="header-top-contact-email  mx-4">
            Send us an email: sale@modeltheme.com
          </div>
        </div>
        <button>
          <div className="icons-right float-right pl-[50px] inline-flex">
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
    </>
  );
};
