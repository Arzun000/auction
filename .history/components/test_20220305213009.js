import React from "react";

export const Test = () => {
  return (
    <>
      <div className="header-top w-full px-[70px] inline-flex">
        <div className="header-top-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
          <div className="top-cont-left lg:inline-flex px-[2px] col-span-3 py-[2px] gap-1">
            <div className="w-[130px] py-[10px]  h-auto">
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
            <div className="w-auto h-auto invisible md:visible items-center">
              <div className="header-top-contact-methods inline-flex py-[10px] ">
                <div className="header-top-contact-phone">
                  Call us toll free: +40 712 345 678
                </div>
                <div className="header-top-contact-email mx-4">
                  Send us an email: sale@modeltheme.com
                </div>
              </div>
            </div>
            <div className="w-auto h-12"></div>
          </div>

          <div className="py-[10px] h-12">
            <div class="flex md:flex-row-reverse flex-wrap">
              <div class="w-full md:w-3/4 text-center text-gray-600">
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
              <div class="w-auto md:w-1/4 text-center text-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
