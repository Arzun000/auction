import React from "react";

export const Testpage = () => {
  return (
    <topheader>
      <div className="container m-auto py-2 flex text-[#334141] text-[14px] font-[400] md:flex-row">
        <div className="container-logo  p-2 ">
          <div className="language-box w-14 pl-2 border-r border-gray-400 items-center inline-flex ">
            <button class="text-gray-700 font-semibold py-2 rounded inline-flex items-center">
              <span class="mr-1">EN</span>

              <img
                src="/static/icons/expand_arrow.png"
                height={15}
                width={15}
              ></img>
            </button>
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
    </topheader>
  );
};
