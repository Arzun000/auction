import React, { useState, useEffect } from "react";
import { createPopper } from "@popperjs/core";

export const Headertwo = () => {
  //Categories dropdown
  // Catrgories dropdown functions
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
    <nav className="bg-white shadow  dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
      <div className=" mx-[5%] lg:py-4 ">
        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="container-logo p-2 ">
            <img src="/static/logo-ibid.png" height={120} width={120}></img>
          </div>

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <div className="container-search text-[14px] float-left inline-flex m-auto">
              <div
                className="dropdown-button h-[40px] bg-white items-center pl-2 pr-2  pt-[8px] shadow-sh-search1 rounded-l-lgx ref={btnDropdownRef}
                      onClick={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}"
              >
                <button className="inline-flex items-center focus:outline-none text-base ">
                  <div className="cat text-[14px] text-[#cecece] ml-6   ">
                    Categories
                  </div>
                  <div className="arrow ml-20">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </button>
                <div
                  ref={popoverDropdownRef}
                  className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left pt-[10px] divide-y divide-gray-100 list-none text-left rounded shadow-lg min-w-48"
                  }
                >
                  <div>
                    <a
                      href="#pablo"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                      onClick={(e) => e.preventDefault()}
                    >
                      Laptop, Tablets & Phones
                    </a>
                  </div>
                  <div>
                    <a
                      href="#pablo"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                      onClick={(e) => e.preventDefault()}
                    >
                      PC, Pheripherals & Software
                    </a>
                  </div>
                  <div>
                    <a
                      href="#pablo"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                      onClick={(e) => e.preventDefault()}
                    >
                      Laptop & IT Products
                    </a>
                  </div>
                  <div>
                    <a
                      href="#pablo"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-[10px]"
                      onClick={(e) => e.preventDefault()}
                    >
                      TV, Audio-Video & Photo
                    </a>
                  </div>
                  <div>
                    <a
                      href="#pablo"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      Game & Consoles
                    </a>
                  </div>
                </div>
              </div>
              <form className="search-pro1 text-[14px] h-[40px] w-[200px] lg:w-[500px] shadow-sh-search1 border-gray-200 focus:outline-none flex rounded-r-lgx items-center">
                {/* <div className="input-text"> */}
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-[#cecece] text-[14px] w-full px-4 focus:outline-none"
                  //className="input-text1"
                />

                <div className="search-btn h-[40px]">
                  <button
                    className="h-[40px] px-[10px] ml-[-40px] bg-[#484848] text-gray-600 rounded-full 
                  border-gray-200 hover:bg-[#ea7f23] active:bg-gray-200 disabled:opacity-50 
                  focus:outline-none  shadow-sh-search"
                  >
                    <img
                      src="/static/icons/search.png"
                      height={20}
                      width={20}
                    ></img>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden md:flex items-center mt-4 md:mt-0">
            <button
              type="button"
              className="flex items-center focus:outline-none"
            >
              <div className="cart float-right inline-flex">
                <div className="cart-text m-auto">
                  <div className="cart-text-l1">My Cart</div>
                  <div className="cart-text-l2">0 items - $0.00</div>
                </div>
                <div className="cart-icon ml-4 mt-2">
                  <img
                    src="/static/icons/basket.png"
                    height={30}
                    width={30}
                  ></img>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
