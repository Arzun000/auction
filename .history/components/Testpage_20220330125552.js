import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./homepage/canvas/latestauction.module.css";

export const Testpage = () => {
  return (
    <nav class="bg-white shadow dark:bg-gray-800">
      <div class=" mx-[20px] py-4 ">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <div className="lang-curr">
              <div className="group inline-block  relative">
                <button className="text-gray-700 py-2 pr-[8px] border-r hover:text-[#ea7f23] inline-flex items-center">
                  <span className="mr-1">EN</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
                  <li className="">
                    <a
                      className="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      EN
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      GE
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      FR
                    </a>
                  </li>
                </ul>
              </div>

              <div className="currency-box w-16 items-center pl-2 inline-flex">
                <div className="group inline-block relative">
                  <button className="text-gray-700  py-2 rounded hover:text-[#ea7f23] inline-flex items-center">
                    <span className="mr-1">EUR</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="absolute hidden bg-white  shadow-sh-search text-gray-700 pt-1 group-hover:block">
                    <li className="">
                      <a
                        className="hover:text-[#ea7f23] py-2 w-[80px] px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        EUR
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        RON
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="hover:text-[#ea7f23] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        JPY
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div class="flex md:hidden">
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

          <div class="flex-1 md:flex md:items-center md:justify-between">
            <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <div className="header-top-contact-methods ml-[2px] hidden float-left md:inline-flex m-auto">
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

            <div class="hidden md:flex items-center mt-4 md:mt-0">
              <button
                class="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <div className="order inline-flex mr-2 p-0">
                  {" "}
                  <img
                    src="/static/icons/truck.png"
                    className="p-[4px]"
                    height={25}
                    width={25}
                  ></img>
                  Order Tracking
                </div>
              </button>

              <button
                type="button"
                class="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="wish inline-flex">
                  <img
                    src="/static/icons/heart.png"
                    className="p-[4px]"
                    height={25}
                    width={25}
                  ></img>
                  Wish List
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
