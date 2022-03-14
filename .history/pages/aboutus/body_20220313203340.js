import React from "react";

export const Body = () => {
  return (
    <div>
      <div className="canv-top-container flex flex-end ">
        <img src="/aboutus/about_business1.jpg"></img>
        <div className="main-content-title absolute bg-white mt-[150px] pr-[48px] pb-[48px] pt-[40px] pl-[50px] w-[50%] ml-[690px] ">
          <div>
            <p className="font-sans-serif text-[36px] font-bold ml-[20px] md:text-[42px]">
              ABOUT US
            </p>
          </div>
          <div className="text-justify text-[#484848] text-[14px] m-[17px] font-[300]">
            <p>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline. Quickly maximize timely deliverables for real-time
              schemas.
            </p>
            <br />
            <p>
              Dynamically procrastinate B2C users after installed base benefits.
              Dramatically visualize customer directed the start-up mentality to
              derive convergence.
            </p>
          </div>
          <div className="button">
            <button
              type="button"
              className="py-2.5 px-5 my-4 mx-2 text-sm text-white bg-[#EA7F23] rounded-full border-[2px] border-grey-800
           hover:bg-white hover:border-white hover:text-[#EA7F23] font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 shadow-xl
             dark:hover:text-white dark:hover:bg-gray-700"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="inline-flex">
        <div className="container-logo p-4">
          <img src="/static/logo-ibid.png" height={150} width={150}></img>
        </div>
        <div className="info"></div>
      </div>
    </div>
  );
};