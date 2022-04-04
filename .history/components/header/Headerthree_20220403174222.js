import React from "react";
import Link from "next/link";
import { fallDown as Menu } from "react-burger-menu";
import styles from "./Headerthree.module.css";
import { createPopper } from "@popperjs/core";

export const Headerthree = () => {
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
    <div className="navbar hidden md:block  bg-[#ea7f23]">
      <nav className=" shadow dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
        <div className="mx-[20px] h-[70px]  md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="cat-dropdown bg-white pt-[10px] h-[70px] text-[#484848]">
              <button
                className=" font-bold uppercase text-sm px-6 py-4 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center ml-[10px]">
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="/">
                    <a>
                      <div className={styles.title}>Home</div>
                    </a>
                  </Link>
                </div>
                {/* List inside Home */}
                <div className={styles.cardflip}>
                  <ul className="absolute bg-white shadow-sh-search w-[180px] text-center text-gray-700 group-hover:block ">
                    <li className=" px-4 pt-6 font-bold">DEMOS</li>
                    <li class="">
                      <a
                        className="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                        href="#"
                      >
                        Main Demo
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Automotive
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Wordpress
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="./shop">
                    <a>
                      <div className={styles.title}>Shop</div>
                    </a>
                  </Link>
                </div>
                {/* List inside shop */}
                <div className={styles.cardflip}>
                  <ul className="absolute bg-white shadow-sh-search w-[600px] -z-1 text-center text-gray-700 group-hover:block ">
                    <div className="inline-flex">
                      <div className="shop-menu-left">
                        <li className=" px-4 pt-6 font-bold">IT & Computer</li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Laptops
                          </a>
                        </li>
                        <li className="">
                          <a
                            className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Desktops
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Graphic Cards
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Work Stations
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            RAM
                          </a>
                        </li>
                      </div>
                      <div className="shop-menu-mid">
                        <li className=" px-4 pt-6 font-bold">WEARABLE</li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Smart Watches
                          </a>
                        </li>
                        <li className="">
                          <a
                            className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Fitness Bracelets
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Masks
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Electronic Tagging
                          </a>
                        </li>
                      </div>
                      <div className="shop-menu-right">
                        {" "}
                        <li className=" px-4 pt-6 font-bold">PHONES</li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Phone Cases
                          </a>
                        </li>
                        <li className="">
                          <a
                            className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Android
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Smart Phones
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Chargers
                          </a>
                        </li>
                        <li className="">
                          <a
                            className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Apple Phones
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="./blog-list">
                    <a>
                      <div className={styles.title}>Blog</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="./aboutus">
                    <a>
                      <div className={styles.title}>About Us</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="./contact">
                    <a>
                      <div className={styles.title}>Contact</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="#">
                    <a>
                      <div className={styles.title}>404</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <Link href="#">
                    <a>
                      <div className={styles.title}>External Links</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:flex items-center mt-4 md:mt-0">
              <div className={styles.container}>
                <div className={styles.card}>
                  <button
                    type="button"
                    className="flex items-center text-white focus:outline-none"
                  >
                    <Link href="./sign-in">
                      <div className={styles.title}>Sign In</div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex bg-blue-300 items-center">
          <div className="container-logo p-4 ">
            <img src="/static/logo-ibid.png" height={100} width={100}></img>
          </div>
          <div className="menu-icons ml-auto mr-0 pt-[2px] inline-flex">
            <div className="ml-[20px] pt-[7px]">
              <Link href="#">
                <a>
                  <img
                    src="/static/icons/user.png"
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
                    src="/static/icons/heart_black.png"
                    height={20}
                    width={20}
                  ></img>
                </a>
              </Link>
            </div>
            <div className="ml-[20px] pt-[7px]">
              <Link href="#">
                <a>
                  <img
                    src="/static/icons/basket_black.png"
                    height={20}
                    width={20}
                  ></img>
                </a>
              </Link>
            </div>
            <div className="ml-[20px] pt-[7px]">
              <Link href="#">
                <a>
                  <img
                    src="/static/icons/search_black.png"
                    height={20}
                    width={20}
                  ></img>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
