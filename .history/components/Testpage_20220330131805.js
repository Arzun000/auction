import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./homepage/canvas/latestauction.module.css";

export const Testpage = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 text-[#334141] text-[14px] font-[400]">
      <div className=" mx-[20px] py-4 ">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="container-logo p-2 ">
              <img src="/static/logo-ibid.png" height={120} width={120}></img>
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
  );
};
