import React from "react";

export const Test = () => {
  return (
    <>
      <div className="header-top w-full px-[70px] bg-gray-100 inline-flex">
        jj
        <div className="header-top-container p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-yellow-100">
          <div className="top-cont-left inline-flex gap-1">
            <div class="lang-currency w-[130px] bg-green-300">
              <div className="language-box w-14 pl-1 border-r border-gray-400 items-center inline-flex ">
                EN
                <img
                  src="/static/icons/expand_arrow.png"
                  height={15}
                  width={15}
                ></img>
              </div>
              <div className="currency-box w-16 items-center pl-2 inline-flex">
                EUR
                <img
                  src="/static/icons/expand_arrow.png"
                  height={15}
                  width={15}
                ></img>
              </div>
            </div>
            <div class="invisible md:visible bg-green-300">
              <div className="header-top-contact-methods inline-flex ">
                <div className="header-top-contact-phone">
                  Call us toll free: +40 712 345 678
                </div>
                <div className="header-top-contact-email mx-4">
                  Send us an email: sale@modeltheme.com
                </div>
              </div>
            </div>
          </div>
          <div class="...">02</div>
          <div class="...">03</div>
          <div class=" ...">04</div>
        </div>
      </div>
    </>
  );
};
