import React from "react";
import Link from "next/link";

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
                <div className="inline-flex text-[#484848]">
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
            {/* Home link */}
            <div class={styles.container}>
              <div class={styles.card}>
                <Link href="/">
                  <a>
                    <b>Home</b>
                  </a>
                </Link>
              </div>
              {/* List inside Home */}
              <div class={styles.cardflip}>
                <ul class="absolute bg-white shadow-sh-search w-[180px] text-center text-gray-700 group-hover:block ">
                  <li className=" px-4 pt-6 font-bold">DEMOS</li>
                  <li class="">
                    <a
                      class="hover:text-[#ea7f23] py-2 px-4 block  whitespace-no-wrap"
                      href="#"
                    >
                      Main Demo
                    </a>
                  </li>
                  <li class="">
                    <a
                      class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Automotive
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Wordpress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class={styles.container}>
              <div class={styles.card}>
                <Link href="#">
                  <a>
                    <b>Shops</b>
                  </a>
                </Link>
              </div>
              {/* List inside shop */}
              <div class={styles.cardflip}>
                <ul class="absolute bg-white shadow-sh-search w-[600px] text-center text-gray-700 group-hover:block ">
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
                      <li class="">
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
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
                <Link href="#">
                  <a>
                    <b>Blog</b>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card}>
                <Link href="./aboutus">
                  <a>
                    <b>About</b>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card}>
                <Link href="#">
                  <a>
                    <b>Contact</b>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card}>
                <Link href="#">
                  <a>
                    <b>404</b>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card}>
                <Link href="#">
                  <a>
                    <b>External Links</b>
                  </a>
                </Link>
              </div>
            </div>
            <button>
              <div className="navlinks float-right  inline-flex">
                <Link href="#">
                  <b>Sign In</b>
                </Link>
              </div>
            </button>
          </div>
          {/* Mobile menu button  */}
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-menu hidden ">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
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
