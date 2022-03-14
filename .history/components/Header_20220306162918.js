import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <topheader>
        <div className="container m-auto py-2 flex  md:flex-row">
          <div className="container-logo  p-2 ">
            <div className="language-box w-14 pl-2 border-r border-gray-400 items-center inline-flex ">
              EN
              <img
                src="/static/icons/expand_arrow.png"
                height={15}
                width={15}
              ></img>
            </div>
            <div className="currency-box w-16 items-center pl-4 inline-flex">
              EUR
              <img
                src="/static/icons/expand_arrow.png"
                height={15}
                width={15}
              ></img>
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
            <div className="icons-right float-right inline-flex">
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
              <div className="">
                <div className="cart float-right inline-flex">
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
              </div>
            </button>
          </div>
        </div>
      </top-container>
      <header-nav>
        <div className="navbar bg-[#ea7f23]">
          <div className="container mx-auto flex flex-col  md:flex-row items-center ">
            <div className="dropdown-button h-12 w-30 pl-2 pr-2 bg-white">
              <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
                <img
                  src="/static/icons/menu_50px.png"
                  height={30}
                  width={30}
                ></img>
                CATEGORIES
              </button>
              {/* Dropdown toggle items */}
              {/* <div className="bg-white ">
              <a href="#" className="block">
                Laptops, Tablets & Phones
              </a>
              <a href="#" className="block">
                PC, Peripherals and Software
              </a>
            </div> */}
            </div>
            <nav className="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 md text-white	md:inline-flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">Home</a>
              <a className="mr-5 hover:text-gray-900">Shop </a>
              <a className="mr-5 hover:text-gray-900">Blog </a>
              <a className="mr-5 hover:text-gray-900">About</a>
              <a className="mr-5 hover:text-gray-900">Contact</a>
              <a className="mr-5 hover:text-gray-900">404</a>
              <a className="mr-5 hover:text-gray-900">External Link</a>
            </nav>
            <a className="ml-auto mr-20 float-right text-white hover:text-gray-900">
              sign in
            </a>
          </div>
        </div>
      </header-nav>
    </>
  );
};
