import React from "react";
import Link from "next/link";

import styles from "./header/Headerthree.module.css";
import { createPopper } from "@popperjs/core";

export const Testpage = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="navbar bg-[#ea7f23]">
        <div className="container navbar  m-auto flex  md:flex-row">
          <div class="hidden md:flex items-center space-x-1">
            <div className="cat-dropdown bg-white p-2">
              <button
                className=" font-bold uppercase text-sm px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
              >
                <div className="inline-flex">
                  <img
                    src="/static/icons/menu_50px.png"
                    className="mr-2"
                    height={15}
                    width={15}
                  ></img>
                  CATEGORIES
                </div>
              </button>
              {/* Dropdown Items */}
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                }
              >
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap text-black"
                  onClick={(e) => e.preventDefault()}
                >
                  Action
                </a>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  Another action
                </a>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  Seprated link
                </a>
              </div>
            </div>
            <a
              href=""
              class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
            >
              Home
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Services
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About
            </a>
            <a
              href=""
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-500 active:bg-blueGray-600 ease-linear transition-all duration-150"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              blueGray Dropdown
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-blueGray-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
