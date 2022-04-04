import React from "react";
import Link from "next/link";
import { fallDown as Menu } from "react-burger-menu";
import styles from "../components/header/Headerthree.module.css";
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
    <div className="navbar hidden md:block bg-[#ea7f23]">
      <nav className=" shadow dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
        <div className=" mx-[20px] ">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="lang-curr">
                <div className="cat-dropdown bg-white pt-[10px] text-[#484848]">
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
              </div>
              {/* <!-- Mobile menu button --> */}
              <div className="flex md:hidden">
                <div className="menu-icons ml-auto mr-0 pt-[2px] inline-flex">
                  <div className="ml-[20px] pt-[7px]">
                    <Link href="#">
                      <a>
                        <img
                          src="/static/icons/phone.png"
                          height={15}
                          width={20}
                        ></img>
                      </a>
                    </Link>
                  </div>
                  <div className="ml-[20px] pt-[7px]">
                    <Link href="#">
                      <a>
                        <img
                          src="/static/icons/email_open.png"
                          height={20}
                          width={20}
                        ></img>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 md:flex md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:items-center ">
                <div className="header-top-contact-methods hidden float-left md:inline-flex m-auto">
                  <div className="header-top-contact-phone">
                    Call us toll free:{" "}
                    <Link href="#">
                      <a>+40 712 345 678</a>
                    </Link>
                  </div>
                  <div className="header-top-contact-email  mx-4">
                    <Link href="#">
                      <a>Send us an email: sale@modeltheme.com</a>
                    </Link>
                  </div>
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
