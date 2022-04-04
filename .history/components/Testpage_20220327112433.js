import React from "react";
import Link from "next/link";
import { fallDown as Menu } from "react-burger-menu";
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

  // for hamburger items

  return (
    <>
      <div className="navbar hidden md:block bg-[#ea7f23]">
        <div className="container navbar  m-auto flex  md:flex-row">
          <div className="hidden md:flex items-center space-x-1">
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
        </div>
      </div>
      {/* Mobile menu div  */}
      <div className="md:hidden flex bg-blue-300 items-center">
        <div className="container-logo p-4 ">
          <img src="/static/logo-ibid.png" height={100} width={100}></img>
        </div>
        <div className="menu-icons ml-auto mr-0 pt-[2px] inline-flex">
          <div className="ml-[20px]">
            <Link href="#">
              <a>
                <img src="/static/icons/user.png" height={15} width={20}></img>
              </a>
            </Link>
          </div>
          <div className="ml-[20px]">
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
          <div className="ml-[20px]">
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
          <div className="ml-[20px]">
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
          <div className="burger ml-auto">
            <Menu
              right
              customBurgerIcon={<img src="/static/icons/menu_50px.png" />}
            >
              <a className="menu-item" href="/">
                Home
              </a>
              <a className="menu-item" href="/salads">
                Salads
              </a>
              <a className="menu-item" href="/pizzas">
                Pizzas
              </a>
              <a className="menu-item" href="/desserts">
                Desserts
              </a>
            </Menu>
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
