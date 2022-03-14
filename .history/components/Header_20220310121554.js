import React from "react";

import Link from "next/link";
export const Header = () => {
  return (
    <>
      <topheader>
        <div className="container m-auto py-2 flex text-[#334141] text-[14px] font-[400] md:flex-row">
          <div className="container-logo inline-block relative p-2 pl-4 ">
            <div class="group inline-block  relative">
              <button class="text-gray-700 font-semibold py-2 pr-[8px] border-r rounded hover:text-[#ea7f23] inline-flex items-center">
                <span class="mr-1">EN</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul class="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
                <li class="">
                  <a
                    class="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    EN
                  </a>
                </li>
                <li class="">
                  <a
                    class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    GE
                  </a>
                </li>
                <li class="">
                  <a
                    class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    FR
                  </a>
                </li>
              </ul>
            </div>

            <div className="currency-box w-16 items-center pl-2 inline-flex">
              <div class="group inline-block relative">
                <button class="text-gray-700 font-semibold py-2 rounded hover:text-[#ea7f23] inline-flex items-center">
                  <span class="mr-1">EUR</span>
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul class="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
                  <li class="">
                    <a
                      class="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      EUR
                    </a>
                  </li>
                  <li class="">
                    <a
                      class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      RON
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      JPY
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-top-contact-methods ml-[2px] hidden float-left lg:inline-flex m-auto">
            <div className="header-top-contact-phone ">
              Call us toll free: +40 712 345 678
            </div>
            <div className="header-top-contact-email  mx-4">
              Send us an email: sale@modeltheme.com
            </div>
          </div>
          <button>
            <div className="icons-right float-right pl-[50px] inline-flex">
              <div className="order inline-flex mr-2 p-0">
                <img
                  src="/static/icons/truck.png"
                  className="p-[4px]"
                  height={25}
                  width={25}
                ></img>
                Order Tracking
              </div>
              <div className="wish inline-flex">
                <img
                  src="/static/icons/heart.png"
                  className="p-[4px]"
                  height={25}
                  width={25}
                ></img>
                Wish List
              </div>
            </div>
          </button>
        </div>
      </topheader>
      <top-container>
        <div className="top-container  ">
          <div className="container m-auto py-2 flex  md:flex-row">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={150} width={150}></img>
            </div>
            <div className="container-search hidden float-left lg:inline-flex m-auto">
              <div className="dropdown-button h-auto items-center pl-2 pr-2  pt-[15px] shadow-sh-search1 rounded-l-lgx">
                <button className="inline-flex items-center  focus:outline-none text-base ">
                  <div className="cat ml-6 ">CATEGORIES</div>
                  <div className="arrow ml-20">
                    <img
                      src="/static/icons/expand_arrow.png"
                      height={15}
                      width={15}
                    ></img>
                  </div>
                </button>
              </div>
              <div className="search-pro bg-white h-auto w-80 shadow-sh-search1 border-gray-200 flex  items-center">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="bg-transparent text-gray-600 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="search-btn h-auto">
                <button
                  className=" h-12 px-4 bg-white text-gray-600 rounded-full 
                border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 
                focus:outline-none rounded-l-lgx shadow-sh-search"
                >
                  <img
                    src="/static/icons/search.png"
                    height={30}
                    width={30}
                  ></img>
                </button>
              </div>
            </div>
            <button>
              <div className="cart float-right pl-[100px] inline-flex">
                <div className="cart-text m-auto">
                  <div className="cart-text-l1">My Cart</div>
                  <div className="cart-text-l2">0 items - $0.00</div>
                </div>
                <div className="cart-icon ml-4 mr-4 mt-2">
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
      </top-container>
      <header-nav>
        <div className="navbar bg-[#ea7f23]">
          <div className="container navbar  m-auto flex  md:flex-row">
            <div className="dropdown-button bg-white p-2 ">
              <button
                class="inline-flex items-center focus:outline-none text-base md:mt-2"
                type="button"
                data-dropdown-toggle="dropdown"
              >
                <div className="order inline-flex mr-2 ">
                  <img
                    src="/static/icons/menu_50px.png"
                    className="mr-2"
                    height={15}
                    width={15}
                  ></img>
                  CATEGORIES
                </div>
              </button>
              <div
                class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4
                "
                id="dropdown"
              >
                <div class="px-1 py-1.5">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Laptop, Tablets & Phones
                  </a>
                </div>
                <div class="px-1 py-1.5">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    PC, Pheripherals & Software
                  </a>
                </div>
                <div class="px-1 py-1.5">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Laptop & IT Products
                  </a>
                </div>
                <div class="px-1 py-1.5">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    TV, Audio-Video & Photo
                  </a>
                </div>
                <div class="px-1 py-1.5">
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Game & Consoles
                  </a>
                </div>
              </div>
              <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
            </div>
            <div className="header-links ml-[2px] hidden text-white md:mr-auto md:ml-4 md:pl-4 float-left lg:inline-flex m-auto">
              <div class="group inline-block  relative">
                <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                  Home
                </button>
                <ul class="absolute hidden bg-white shadow-sh-search w-[180px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block">
                  <li className=" px-4 pt-6 font-bold">DEMOS</li>
                  <li class="">
                    <a
                      class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
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
              <div class="group inline-block  relative">
                <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                  Shop
                </button>
                <ul class="absolute hidden bg-white shadow-sh-search w-[350px] ease-in-out duration-1000 text-center text-gray-700 group-hover:block">
                  <div className="inline-flex">
                    <div className="shop-menu-left">
                      <li className=" px-4 pt-6 font-bold">IT & Computer</li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Laptops
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Desktops
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Graphic Cards
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Work Stations
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          RAM
                        </a>
                      </li>
                    </div>
                    <div className="shop-menu-mid">
                      {" "}
                      <li className=" px-4 pt-6 font-bold">WEARABLE</li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Smart Watches
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Fitness Bracelets
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Masks
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Electronic Tagging
                        </a>
                      </li>
                    </div>
                    <div className="shop-menu-right">
                      {" "}
                      <li className=" px-4 pt-6 font-bold">PHONES</li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Phone Cases
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Android
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Smart Phones
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Chargers
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Apple Phones
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>

              <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                Blog
              </button>
              <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                About
              </button>
              <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                Contact
              </button>
              <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                404
              </button>
              <button class="text-white bg-blue-300 font-semibold h-[60px] pr-4 inline-flex items-center">
                External Link
              </button>
            </div>
            <button>
              <div className="signin float-right pl-[210px] text-white inline-flex">
                <a href="#" class="mr-5 no-underline  hover:text-gray-900">
                  Sign in
                </a>
              </div>
            </button>
          </div>
        </div>
      </header-nav>
    </>
  );
};
