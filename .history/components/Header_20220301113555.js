import React from "react";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      {" "}
      <div className="mx-auto flex max-w-7xl justify-between p-5">
        <div className="navbar bg-[#ea7f23]">
          <div className="container">
            <div className="nav-item-dropdown h-6 w-28 ">
              <button class="inline-flex bg-white">
                <img
                  src="/static/icons/menu_50px.png"
                  height={30}
                  width={30}
                ></img>
                CATEGORIES
              </button>
              <div>
                <a href="#">Laptops, Tablets & Phones</a>
                <a href="#">PC, Peripherals and Software</a>
              </div>
            </div>

            <div className="flex items-left space-x-5">
              <div className="hidden items-center space-x-5 md:inline-flex">
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  Home
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  Shop
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  Blog
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  About
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  Contact
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  404
                </a>
                <a href="#" class="font-medium text-white hover:text-gray-900">
                  External Link
                </a>
                {/* <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
                Follow
              </h3> */}
              </div>
            </div>
            <div className="flex items-center space-x-5 text-green-600">
              <h3>sign In</h3>
              {/* <h3 className="rounded-full border border-green-600 px-4 py-1">
              Get Started
            </h3> */}
            </div>
          </div>
        </div>
      </header>
      <div>this is head</div>
      <div>this is head</div>
    </>
  );
};
