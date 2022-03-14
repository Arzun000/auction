import React from "react";

export const Test = () => {
  return (
    <>
      <div className="navbar bg-[#ea7f23]">
        <div className="container navbar  m-auto flex  md:flex-row">
          <div className="dropdown-button bg-white p-2 ">
            <button className="inline-flex items-center focus:outline-none text-base md:mt-2">
              <div className="order inline-flex mr-2 p-0">
                <img
                  src="/static/icons/menu_50px.png"
                  height={30}
                  width={30}
                ></img>
                CATEGORIES
              </div>
            </button>
          </div>
          <div className="header-links ml-[2px] hidden text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 float-left lg:inline-flex m-auto">
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              Home
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              Shop{" "}
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              Blog{" "}
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              About
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              Contact
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              404
            </a>
            <a href="#" class="mr-5 no-underline  hover:text-gray-900">
              External Link
            </a>
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
      </div>
    </>
  );
};
