import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./homepage/canvas/latestauction.module.css";

export const Testpage = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
      <div className=" mx-[20px] py-4 ">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={120} width={120}></img>
            </div>
          </div>

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <button className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none">
              <div className="order inline-flex mr-2 p-0">
                <img
                  src="/static/icons/truck.png"
                  className="mr-[4px]"
                  height={15}
                  width={15}
                ></img>
                Order Tracking
              </div>
            </button>

            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <div className="wish inline-flex">
                <img
                  src="/static/icons/heart0.png"
                  className="mr-[4px]"
                  height={15}
                  width={15}
                ></img>
                Wish List
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <button className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none">
              <div className="order inline-flex mr-2 p-0">
                <img
                  src="/static/icons/truck.png"
                  className="mr-[4px]"
                  height={15}
                  width={15}
                ></img>
                Order Tracking
              </div>
            </button>

            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <div className="wish inline-flex">
                <img
                  src="/static/icons/heart0.png"
                  className="mr-[4px]"
                  height={15}
                  width={15}
                ></img>
                Wish List
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
