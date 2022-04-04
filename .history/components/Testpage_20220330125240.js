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

            <div class="flex items-center mt-4 md:mt-0">
              <button
                class="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                class="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    class="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 class="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};