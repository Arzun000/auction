import React from "react";

export const Test = () => {
  return (
    <>
      <div className="header-top w-full px-[70px] bg-gray-100 inline-flex">
        <div className="header-top-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-yellow-100">
          <div className="top-cont-left inline-flex px-[2px] col-span-3 bg-blue-400 py-[2px] gap-1">
            <div className="w-[128px] bg-gray-500 py-[10px]  h-12">
              <div className="language-box w-14 pl-2 border-r border-gray-400 items-center inline-flex ">
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
            <div className="w-3/5 bg-gray-400 h-12 invisible md:visible"></div>
            <div className="w-1/5 bg-gray-500 h-12"></div>
          </div>

          <div className="bg-gray-500 h-12"></div>
        </div>
      </div>
    </>
  );
};
