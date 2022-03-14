import React from "react";

export const Body = () => {
  return (
    <div>
      <div className="canv-top-container flex flex-end bg-green-200">
        <img src="/aboutus/about_business.jpg"></img>
        <div className="main-content-title absolute bg-white mt-[300px] p-[60px] ml-[850px] mr-[20px]">
          <div>
            <p className="font-sans-serif text-[36px] md:text-[42px]">
              ABOUT US
            </p>
          </div>
          <div className="text-justify">
            <p>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline. Quickly maximize timely deliverables for real-time
              schemas.
            </p>
            <p>
              Dynamically procrastinate B2C users after installed base benefits.
              Dramatically visualize customer directed the start-up mentality to
              derive convergence.
            </p>
          </div>
          <div className="button">
            <button
              type="button"
              className="py-2.5 px-5 my-4 mx-2 text-sm text-grey-800 rounded-full border-[2px] border-grey-800
           hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-bold focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
             dark:hover:text-white dark:hover:bg-gray-700"
            >
              VIEW AUCTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
